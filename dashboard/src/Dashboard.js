import React, { useState, useEffect } from "react";
import { getPrediction } from "./api";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

// Color mapping for hazard types
const hazardColors = {
  SAFE: "#4CAF50",
  FIRE: "#F44336",
  GAS_LEAK: "#FF9800",
  EARTHQUAKE: "#FFC107",
  MULTI_HAZARD: "#9C27B0"
};

export default function Dashboard() {
  // Sensor state
  const [sensorData, setSensorData] = useState({
    gas: 700,
    flame: 0,
    dev_mg: 40
  });

  // ML prediction
  const [prediction, setPrediction] = useState(null);

  // History for charts + alert logs
  const [history, setHistory] = useState([]);

  // Auto-call ML API every 1.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      getPrediction(sensorData.gas, sensorData.flame, sensorData.dev_mg)
        .then((res) => {
          setPrediction(res);

          setHistory((prev) => [
            ...prev.slice(-50), // keep last 50 entries
            {
              time: new Date().toLocaleTimeString(),
              gas: Number(sensorData.gas),
              dev_mg: Number(sensorData.dev_mg),
              hazard: res.prediction
            }
          ]);
        });
    }, 1500);

    return () => clearInterval(interval);
  }, [sensorData]);

  // Simulation buttons
  const simulateFire = () => setSensorData({ gas: 900, flame: 1, dev_mg: 70 });
  const simulateGas = () => setSensorData({ gas: 1800, flame: 0, dev_mg: 50 });
  const simulateQuake = () => setSensorData({ gas: 700, flame: 0, dev_mg: 450 });
  const simulateMulti = () => setSensorData({ gas: 1900, flame: 1, dev_mg: 400 });
  const simulateSafe = () => setSensorData({ gas: 700, flame: 0, dev_mg: 30 });

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>AI Multi-Hazard Prediction Dashboard</h1>

      {/* Sensor Inputs */}
      <h3>Sensor Input (Simulated)</h3>
      <div style={{ marginBottom: "20px" }}>
        <label>Gas: </label>
        <input
          type="number"
          value={sensorData.gas}
          onChange={(e) => setSensorData({ ...sensorData, gas: e.target.value })}
        />

        <label style={{ marginLeft: "20px" }}>Flame (0/1): </label>
        <input
          type="number"
          value={sensorData.flame}
          onChange={(e) => setSensorData({ ...sensorData, flame: e.target.value })}
        />

        <label style={{ marginLeft: "20px" }}>Vibration (mg): </label>
        <input
          type="number"
          value={sensorData.dev_mg}
          onChange={(e) => setSensorData({ ...sensorData, dev_mg: e.target.value })}
        />
      </div>

      {/* Simulation Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={simulateSafe} style={btnStyle}>SAFE</button>
        <button onClick={simulateFire} style={btnStyle}>FIRE</button>
        <button onClick={simulateGas} style={btnStyle}>GAS LEAK</button>
        <button onClick={simulateQuake} style={btnStyle}>EARTHQUAKE</button>
        <button onClick={simulateMulti} style={btnStyle}>MULTI HAZARD</button>
      </div>

      {/* Prediction Card */}
      <h3 style={{ marginTop: "30px" }}>Prediction Output</h3>

      {prediction && (
        <div style={{
          background: hazardColors[prediction.prediction],
          padding: "20px",
          color: "white",
          fontSize: "22px",
          marginTop: "20px",
          borderRadius: "10px",
          width: "350px",
        }}>
          <b>Hazard: {prediction.prediction}</b><br />
          Confidence: {(prediction.confidence * 100).toFixed(2)}%
        </div>
      )}

      {/* Raw JSON (optional) */}
      <pre style={{
        background: "#f2f2f2",
        padding: "20px",
        borderRadius: "10px",
        width: "400px",
        marginTop: "10px"
      }}>
        {prediction ? JSON.stringify(prediction, null, 2) : "Loading..."}
      </pre>

      {/* Charts */}
      <h3 style={{ marginTop: "30px" }}>Sensor Trends</h3>

      <LineChart width={650} height={250} data={history}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="time" hide={false} />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="gas" stroke="#F44336" name="Gas Value" />
      </LineChart>

      <LineChart width={650} height={250} data={history} style={{ marginTop: "20px" }}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="time" hide={false} />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="dev_mg" stroke="#2196F3" name="Vibration (mg)" />
      </LineChart>

      {/* Alert History */}
      <h3 style={{ marginTop: "30px" }}>Alert History</h3>
      <div style={{
        maxHeight: "150px",
        overflowY: "scroll",
        border: "1px solid #ccc",
        padding: "10px",
        width: "300px",
        borderRadius: "8px"
      }}>
        {history.map((item, index) => (
          <div key={index}>
            [{item.time}] {item.hazard}
          </div>
        ))}
      </div>
    </div>
  );
}

// Button Style
const btnStyle = {
  padding: "10px 20px",
  border: "none",
  background: "#1976D2",
  color: "white",
  borderRadius: "6px",
  cursor: "pointer",
  marginRight: "10px"
};
