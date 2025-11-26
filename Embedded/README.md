Embedded Node – STM32F401 Multi-Sensor Disaster Detection

This folder contains the original STM32F401 Black Pill firmware for multi-hazard detection using:

MQ-2 Gas Sensor

IR Flame Sensor

MPU6050 Accelerometer

HC-05 Bluetooth Module

PWM LED (for vibration intensity)

Buzzer alarm

✨ Features

Gas detection using ADC

Flame detection using GPIO

Vibration detection using I²C (MPU6050)

Earthquake magnitude calculation (using raw accel → deviation from 1g)

UART alerts to HC-05 Bluetooth

PWM brightness control based on vibration

Buzzer alert for gas/fire

Embedded C implementation using STM32 HAL registers

🧩 Output

“ALERT! GAS DETECTED”

“ALERT! FLAME DETECTED”

“ALERT! EARTHQUAKE detected, dev=xxx mg”

“SAFE” when no hazard is present

This firmware inspired the sensor modeling used in the AI hazard prediction system.
