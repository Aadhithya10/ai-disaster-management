from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import joblib

app = FastAPI()

# CORS FIX
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load("../ml_model/hazard_rf_model.pkl")
labels = model.classes_

@app.get("/")
def home():
    return {"message": "Hazard Prediction API Running"}

@app.get("/predict")
def predict(gas: float, flame: int, dev_mg: float):
    X = np.array([[gas, flame, dev_mg]])
    probs = model.predict_proba(X)[0]
    idx = probs.argmax()
    return {
        "prediction": labels[idx],
        "confidence": float(probs[idx]),
        "details": {
            "gas": gas,
            "flame": flame,
            "dev_mg": dev_mg
        }
    }
