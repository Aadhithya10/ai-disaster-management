AI-Powered Multi-Hazard Disaster Prediction System
End-to-end IoT + Machine Learning + Full-Stack Dashboard Project

This project upgrades a traditional STM32-based disaster detection node into an AI-powered hazard prediction platform with:
-> Simulated IoT Sensor Data (gas, flame, vibration)
-> Machine Learning Model (Random Forest)
-> FastAPI Backend
-> React Real-Time Dashboard
-> Live Charts + Alerts + Simulation Controls

1. Project Overview
   This system predicts:
    => SAFE
    => FIRE
    => GAS LEAK
    => EARTHQUAKE
    => MULTI HAZARD
using sensor values modeled from:
--MQ-2 Gas Sensor
--Flame Sensor
--MPU6050 Accelerometer

Originally implemented on STM32F401 Black Pill, the project is extended into a full AI system.

2. Folder Structure
ai-disaster-management/
│
├── embedded_node/         # STM32 firmware
├── data/                  # Synthetic generator + CSV
├── ml_model/              # Training notebook + ML model
├── backend/               # FastAPI server
└── dashboard/             # React frontend UI

3. Machine Learning Model
->Algorithm: Random Forest
->Accuracy: 98–99%
->Trained on: synthetic sensor data modeled from STM32 readings
->Features:
    Gas ADC value
    Flame binary
    Vibration (mg deviation)
->Output: hazard class + confidence score
->Model saved as hazard_rf_model.pkl

4. Running the Backend (FastAPI)
   cd backend
   uvicorn app:app --reload
   
Open API docs:
 http://127.0.0.1:8000/docs

Example request:
/predict?gas=1700&flame=1&dev_mg=40

5. Running the React Dashboard
      cd dashboard
      npm install
      npm start
Dashboard Features:
=>Live prediction
=>Simulation buttons
=>Gas + vibration charts
=>Alert history
=>Color-coded hazard cards

6. Screenshots
   Safe State-
<img width="888" height="610" alt="image" src="https://github.com/user-attachments/assets/23b04c4d-5ae3-48ff-8bfa-7aac422e9145" />
<img width="755" height="598" alt="image" src="https://github.com/user-attachments/assets/089ffbdc-78b3-4bfd-b6f6-79541cf704f7" />
<img width="393" height="257" alt="image" src="https://github.com/user-attachments/assets/d0fd2889-1b55-409f-bd23-84330ed2009b" />
    Fire state-
<img width="847" height="616" alt="image" src="https://github.com/user-attachments/assets/1f1999b7-5a57-4b64-899e-e2d0650e800e" />
<img width="745" height="584" alt="image" src="https://github.com/user-attachments/assets/b0ae0f35-eeb8-4d9e-8820-ede9f7e20579" />
<img width="372" height="248" alt="image" src="https://github.com/user-attachments/assets/8ee9bf28-f333-4a9c-a41a-ac4fbefb2b38" />
    Gas Leak state-
<img width="870" height="620" alt="image" src="https://github.com/user-attachments/assets/95be95ca-0bb4-4f31-9068-9460be02e730" />
<img width="722" height="590" alt="image" src="https://github.com/user-attachments/assets/5afbabcd-5a95-42de-8be8-6d3481d056db" />
<img width="359" height="250" alt="image" src="https://github.com/user-attachments/assets/9c6b5698-9846-46a6-a77f-fa7992979467" />
    EarthQuake State-
<img width="878" height="608" alt="image" src="https://github.com/user-attachments/assets/5da6a850-7948-46e4-bb76-010579ff758c" />
<img width="756" height="588" alt="image" src="https://github.com/user-attachments/assets/caa6bd2a-f168-466c-a128-5e3fa7b2ff6f" />
<img width="433" height="253" alt="image" src="https://github.com/user-attachments/assets/56a64cc7-270a-4fdd-89e2-e036e056cfce" />
    Multi Hazard state-
<img width="884" height="550" alt="image" src="https://github.com/user-attachments/assets/cfdf67db-892e-4785-a360-a68944f26e72" />
<img width="722" height="597" alt="image" src="https://github.com/user-attachments/assets/7ee3b34c-30a2-4c84-9b39-b02144c7f8d6" />
<img width="416" height="265" alt="image" src="https://github.com/user-attachments/assets/1b3ee61e-d5a1-4a1e-a02e-c107b1aab5a5" />
   
7. About This Project

Originally developed as a multi-sensor STM32 disaster detection system, this project evolves into a complete AI-based hazard intelligence platform, demonstrating:
     -- Embedded Systems
     -- Data Simulation
     -- ML Classification
     -- Full-Stack Web Development
     
8. Author
Aadhithya Bharathi
