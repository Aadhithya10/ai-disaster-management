# 🚨 **AI-Powered Multi-Hazard Disaster Prediction System**

### *End-to-End IoT + Machine Learning + Full-Stack Real-Time Dashboard*

This project upgrades a traditional STM32-based multi-sensor disaster detection node into a **complete AI-powered hazard prediction platform**.

It integrates:

* 📡 **Simulated IoT Sensor Data** (gas, flame, vibration)
* 🤖 **Machine Learning Model (Random Forest)**
* ⚙️ **FastAPI Backend**
* 🌐 **React Real-Time Dashboard**
* 📊 **Live Charts, Alerts, and Simulation Controls**

---

# 📘 **1. Project Overview**

This system predicts the following hazards:

* 🟢 **SAFE**
* 🔥 **FIRE**
* ☢️ **GAS LEAK**
* 🌎 **EARTHQUAKE**
* 💥 **MULTI HAZARD** (combined events)

Sensor values are modeled using the real characteristics of:

* **MQ-2 Gas Sensor**
* **Flame Sensor (IR)**
* **MPU6050 Accelerometer**

Originally implemented on the **STM32F401 Black Pill**, the project is extended into a modern AI-powered hazard intelligence platform.

---

# 📁 **2. Folder Structure**

```
ai-disaster-management/
│
├── embedded_node/         # STM32 firmware (C)
├── data/                  # Synthetic data generator + CSV
├── ml_model/              # Training notebook + ML model (.pkl)
├── backend/               # FastAPI hazard prediction API
└── dashboard/             # React real-time monitoring UI
```

---

# 🤖 **3. Machine Learning Model**

* **Algorithm:** Random Forest
* **Accuracy:** 98–99%
* **Trained on:** Synthetic sensor data generated from real STM32 sensor behavior
* **Features Used:**

  * Gas ADC value
  * Flame (0/1)
  * Vibration magnitude (mg deviation)
* **Output:** Hazard class + confidence score
* **Model File:** `hazard_rf_model.pkl`

---

# ⚙️ **4. Running the Backend (FastAPI)**

```bash
cd backend
uvicorn app:app --reload
```

API docs (Swagger UI):
👉 [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

Example request:

```
/predict?gas=1700&flame=1&dev_mg=40
```

---

# 🌐 **5. Running the React Dashboard**

```bash
cd dashboard
npm install
npm start
```

### Dashboard Features

* 🔮 Live hazard prediction
* 🧪 Simulation buttons (Fire, Gas, Earthquake, Multi-Hazard)
* 📈 Gas + vibration trend charts
* 🕒 Alert history
* 🟥🟧🟨🟩 Color-coded hazard cards

---

# 🏗️ **6. Architecture Diagram**

## **🧩 System Architecture**

```mermaid
flowchart LR
    A[STM32 Multi-Sensor Node\n(Gas, Flame, Vibration)] --> B[Synthetic Data\nGenerator]
    B --> C[ML Training Pipeline\n(Random Forest Model)]
    C --> D[Trained Model\nhazard_rf_model.pkl]
    D --> E[FastAPI Backend\n/predict Endpoint]
    E --> F[React Dashboard\n(Real-Time UI)]
```

---

## **🔄 Data Flow**

```mermaid
flowchart LR
    A[Synthetic Sensor Data] --> B[Cleaning & Preprocessing]
    B --> C[Feature Extraction\ngas, flame, dev_mg]
    C --> D[Model Training\nRandom Forest]
    D --> E[Saved Model File\nhazard_rf_model.pkl]
    E --> F[FastAPI Server\nLoads ML Model]
    F --> G[Dashboard Fetches Prediction]
```

---

## **🏛️ Full Software Architecture**

```mermaid
flowchart TB
    A[Sensors (Gas, Flame, Vibration)] --> B[STM32 Node (C Firmware)]
    B --> C[Synthetic Data CSV]
    C --> D[Jupyter Notebook\nML Training]
    D --> E[Random Forest Model]
    E --> F[FastAPI Backend\nPython]
    F --> G[REST API\n/predict]
    G --> H[React Dashboard]
    H --> I[Charts, Alerts, Simulation]
```

---

## **🧪 ML Pipeline**

```mermaid
flowchart LR
    A[Raw Synthetic Data] --> B[EDA\nVisualization & Stats]
    B --> C[Train-Test Split]
    C --> D[Random Forest Training]
    D --> E[Evaluation\nAccuracy & Confusion Matrix]
    E --> F[Save Model\nhazard_rf_model.pkl]
```

---

# 📸 **7. Screenshots**

## 🟢 SAFE State

<img width="888" height="610" alt="image" src="https://github.com/user-attachments/assets/23b04c4d-5ae3-48ff-8bfa-7aac422e9145" />
<img width="755" height="598" alt="image" src="https://github.com/user-attachments/assets/089ffbdc-78b3-4bfd-b6f6-79541cf704f7" />
<img width="393" height="257" alt="image" src="https://github.com/user-attachments/assets/d0fd2889-1b55-409f-bd23-84330ed2009b" />

---

## 🔥 FIRE State

<img width="847" height="616" alt="image" src="https://github.com/user-attachments/assets/1f1999b7-5a57-4b64-899e-e2d0650e800e" />
<img width="745" height="584" alt="image" src="https://github.com/user-attachments/assets/b0ae0f35-eeb8-4d9e-8820-ede9f7e20579" />
<img width="372" height="248" alt="image" src="https://github.com/user-attachments/assets/8ee9bf28-f333-4a9c-a41a-ac4fbefb2b38" />

---

## ☢️ GAS LEAK

<img width="870" height="620" alt="image" src="https://github.com/user-attachments/assets/95be95ca-0bb4-4f31-9068-9460be02e730" />
<img width="722" height="590" alt="image" src="https://github.com/user-attachments/assets/5afbabcd-5a95-42de-8be8-6d3481d056db" />
<img width="359" height="250" alt="image" src="https://github.com/user-attachments/assets/9c6b5698-9846-46a6-a77f-fa7992979467" />

---

## 🌎 EARTHQUAKE

<img width="878" height="608" alt="image" src="https://github.com/user-attachments/assets/5da6a850-7948-46e4-bb76-010579ff758c" />
<img width="756" height="588" alt="image" src="https://github.com/user-attachments/assets/caa6bd2a-f168-466c-a128-5e3fa7b2ff6f" />
<img width="433" height="253" alt="image" src="https://github.com/user-attachments/assets/56a64cc7-270a-4fdd-89e2-e036e056cfce" />

---

## 💥 MULTI HAZARD

<img width="884" height="550" alt="image" src="https://github.com/user-attachments/assets/cfdf67db-892e-4785-a360-a68944f26e72" />
<img width="722" height="597" alt="image" src="https://github.com/user-attachments/assets/7ee3b34c-30a2-4c84-9b39-b02144c7f8d6" />
<img width="416" height="265" alt="image" src="https://github.com/user-attachments/assets/1b3ee61e-d5a1-4a1e-a02e-c107b1aab5a5" />

---

# 📚 **8. About This Project**

This project began as a **multi-sensor STM32 disaster detection system**, and evolved into a **full AI-based hazard intelligence platform**, demonstrating skills in:

* 🔧 Embedded Systems
* 🧪 Data Simulation
* 🤖 Machine Learning
* ⚙️ Backend Development (FastAPI)
* 🌐 Frontend Development (React)
* 📈 Real-Time Visualization

---

# 👤 **9. Author**

**Aadhithya Bharathi**
AI & Embedded Systems Developer

---
