📊 Synthetic Sensor Data Generator

This folder contains:

synthetic_generator.py

synthetic_data.csv

🎯 Purpose

Since STM32 hardware is not always available, this module simulates real sensor readings based on the behavior of:

MQ-2 gas sensor ADC curve

Flame sensor digital trigger

Accelerometer vibration deviation (mg)

Combined multi-hazard events

🛠️ Generated Data Includes:

Gas ADC Value

Flame Sensor (0/1)

Vibration (mg deviation)

Hazard label

Multi-hazard combinations

📌 Usage
python synthetic_generator.py

Output:

synthentic_data.csv
→ Used for ML model training.
