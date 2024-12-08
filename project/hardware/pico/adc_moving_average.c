/**
 * Copyright (c) 2020 Raspberry Pi (Trading) Ltd.
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

#include <stdio.h>
#include "pico/stdlib.h"
#include "hardware/gpio.h"
#include "hardware/adc.h"

#define SUBSET1_SIZE 10	//size of a big subset	
#define SUBSET2_SIZE 3 //size of a small subset


// talking average of subsets 
float moving_average (float subset [], int subset_size){
	float sum = 0; 
	for (int i=0; i<subset_size; i++){
		sum += subset[i];
	}
	return sum/subset_size;
}




int main() {
    stdio_init_all();
    printf("ADC Example, measuring GPIO26\n");

    adc_init();

    // Make sure GPIO is high-impedance, no pullups etc
    adc_gpio_init(26);
    // Select ADC input 0 (GPIO26)
    adc_select_input(0);
	
	// initialise array and subsets
	float array[ARRAY_SIZE] = {0};
	float subset1[SUBSET1_SIZE] = {0};
	float subset2[SUBSET2_SIZE] = {0};
	
	// initialise array count
	int count = 0;
	
	// initialise big/ small moving average
	float big_moving_average = 0;		// for subset 1
	float big_small_average = 0;		// for subset 2
	
    while (1) {
        // 12-bit conversion, assume max value == ADC_VREF == 3.3 V
        const float conversion_factor = 3.3f / (1 << 12);
        uint16_t result = adc_read();
		float voltage = result * conversion_factor  // change adc reading to voltage 
		
		// save readings into an array 
		array[count] = voltage;
		count ++; 
		
		
		// moving algorithm for big_moving_average, subset1
		if (count >= SUBSET1_SIZE){		// To start from [0] 
		for (int i=0; i <SUBSET1_SIZE1; i++) {
			subset1[i]= array[count-SUBSET1_SIZE +i];
			}
			big_moving_average = moving_average(subset1, SUBSET1_SIZE)
		else{
		
		   }
		}
		
		printf("voltage: %f V\n, big_moving_average", big_moving_average);
		
		// moving algorithm for small_moving average, subset2 
		/*if (count >= SUBSET2_SIZE){		// To start from [0] 
		for (int i=0; i <SUBSET2_SIZE1; i++) {
			subset2[i]= array[count-SUBSET1_SIZE +i];
			}
			small_moving_average= moving_average(subset2, SUBSET1_SIZE)
		else{
		
		}
		*/         // U CAN UNCOMMENT THIS AFTER U TEST THE FIRST ONE 
		
		// count finishes- end of array, goes back to 0 AND I THINK THE LOOP WILL REPEAT? 
		if (count >= ARRAY_SIZE) {
			count = 0;
		}
		
		
       // printf("Raw value: 0x%03x, voltage: %f V\n", result, result * conversion_factor);
        sleep_ms(500);
    }
}

