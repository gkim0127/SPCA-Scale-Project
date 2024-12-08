#ifndef ADC_H
#define ADC_H

#include <string.h>
#include <time.h>
#include <stdio.h>
#include <stdint.h>
#include <math.h>

#include "hardware/gpio.h"
#include "hardware/adc.h"

#define ARRAY_SIZE 20
#define MATCHES 350
#define VOLTAGE_DIFFERENCE 0.1 //
#define COEFFICIENT 10.394
extern float ADC_OFF_SET;

void adc_setup();
float adc_offset_VOLTS();
float adc_average_VOLTS();

#endif 