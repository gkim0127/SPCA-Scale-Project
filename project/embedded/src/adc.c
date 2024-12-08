#include "../header/adc.h"
// include stdlib.h?

float ADC_OFF_SET;

//boolean for offset and weight obtained
extern bool offsetObtained;
extern bool weightObtained;

//LED PIN 
gpio_init(2);
gpio_set_dir(2, GPIO_OUT);

void adc_setup(){
    // Make sure GPIO is high-impedance, no pullups etc, initalise the adc configs
    adc_init();
    adc_gpio_init(26);
    // Select ADC input 0 (GPIO26 - Vfil)
    adc_select_input(0);
}

float adc_offset_VOLTS(){
    float voltage = 0;
	float average_value_offset = 0;

    for (int i =0; i < ARRAY_SIZE; i++) {
        const float conversion_factor = 3.3f / (1 << 12);
        uint16_t result = adc_read();
        voltage = result * conversion_factor;
        average_value_offset = average_value_offset +  voltage;
    }
    ADC_OFF_SET = (average_value_offset/ARRAY_SIZE);
    printf("THE ADC OFF SET IS %f", ADC_OFF_SET);
    //blink LED 3 times
    for (int i=0; i<3; i++){
    gpio_put(2,1); // set high
    sleep_ms(250);
    gpio_put(2,0);
    sleep_ms(250);
    }

    // offset obtained bool --> true
    offsetObtained = true; 
    return ADC_OFF_SET;
}

float adc_average_VOLTS(){
	float voltage = 0;
    float average_value = 0;
    float temp_average = 0;		
    int flag = 1;
    int match_counter = 0;

    while(flag){
        for (int i =0; i < ARRAY_SIZE; i++) {
            const float conversion_factor = 3.3f / (1 << 12);
            uint16_t result = adc_read();
            voltage = result * conversion_factor ; 
            average_value = average_value + voltage;
        }

        float average_voltage = average_value / ARRAY_SIZE;
        average_voltage = average_voltage - ADC_OFF_SET ;

        if (match_counter == MATCHES) {
            flag= 0;
            float weight =(average_voltage* COEFFICIENT) ; // change voltage to weight
            printf("ITS SENTTTTTTTTTTT %f  with voltage value of %f\n", (weight), average_voltage);
            
            // turn LED ON indicating Weight is ready to be sent 
            gpio_put(2,1);
            // weight obtained bool -> true
            weightObtained = true; 
            return weight;
        }
        else if(abs(temp_average - average_voltage) < VOLTAGE_DIFFERENCE ){
            match_counter += 1; 
            printf("INCREASING MATCH COUNTER %d\n", match_counter);
            temp_average = average_voltage;
        }else{
            printf("RESET MATCH COUNTER");
            match_counter = 0;
            temp_average = average_voltage;
        }

    }
}