🤖 Hazard Prediction Machine Learning Model

This folder contains:

Jupyter Notebook: disaster_training.ipynb

Trained Model: hazard_rf_model.pkl

📌 Features:

EDA of sensor data

Visualization of gas, flame, vibration patterns

Train/test split

Random Forest model training

Model accuracy & confusion matrix

Saving trained model

🧠 Model Details:

Algorithm: Random Forest

Accuracy: ~98–99%

Inputs: gas, flame, vibration deviation

Outputs: SAFE / FIRE / GAS_LEAK / EARTHQUAKE / MULTI_HAZARD

📦 Output:

hazard_rf_model.pkl → used by FastAPI backend.
