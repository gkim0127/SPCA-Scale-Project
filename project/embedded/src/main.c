#include <stdio.h>

#include "../header/adc.h"
#include "../header/wifi.h"

bool offsetObtained = false;
bool weightObtained = false;

typedef enum{
    STATE_AUTO_ZERO= 0,
    STATE_READY_TO_WEIGH = 1,
    STATE_WEIGHING_DONE = 2,
    STATE_SENDING = 3,
    STATE_SLEEP = 4
} State;


void stateMachine(State* currentState){
    switch(*currentState){

    case STATE_AUTO_ZERO:
        printf("ready to auto zero \n ");
        adc_setup();
        float offset_voltage = adc_offset_VOLTS();
        printf("Offset voltage is %f/n", offset_voltage);
        if (offsetObtained){
        *currentState = STATE_READY_TO_WEIGH;
        }
        break;

    case STATE_READY_TO_WEIGH:
        // the led will blink - on off on off...
        // this led will tell the user that its ready to weigh
        
        printf("ready to weighh.. \n ");
        float weight = adc_average_VOLTS();
        printf("weight is %f/n", weight);
        if (weightObtained){
        *currentState = STATE_WEIGHING_DONE;
        }
        break;

    case STATE_WEIGHING_DONE:
        // once its done, the led will turn on 
        printf("weighing is done \n");

        *currentState = STATE_SENDING;
        break;
    case STATE_SENDING:
        // once its done, the led will turn on 
        printf("sending state \n");
        *currentState = STATE_SLEEP;
        break;
    case STATE_SLEEP:
        // time out will cause the state to be transition
        printf("currently sleeping \n");
        *currentState = STATE_AUTO_ZERO;
        break;
    default:
        printf("invalid state; \n");
        break;
        }
    
}



int main(){
    // initalize the standard input and outputs 
    stdio_init_all(); 
    // initalize and connect to the wifi once -- maybe this should not be here?
    // init_the_wifi();
    sleep_ms(10000);
    State *currentstate = STATE_AUTO_ZERO;
    printf("connecting...");

    for (int i =0; i<  5; i++){
        sleep_ms(1000);
        stateMachine(&currentstate);
    }

}