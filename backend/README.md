⚙️ FastAPI Backend – Hazard Prediction API

This folder contains the backend server that loads the trained ML model and exposes a prediction endpoint.

🚀 Run the server:
cd backend
uvicorn app:app --reload

🔗 API Endpoints
🟩 Check status
GET /

🟦 Predict hazard
GET /predict?gas=700&flame=0&dev_mg=40

📌 Response:
{
  "prediction": "SAFE",
  "confidence": 0.98,
  "details": {
    "gas": 700,
    "flame": 0,
    "dev_mg": 40
  }
}

🔧 Technologies Used

FastAPI

joblib model loading

CORS middleware

NumPy
