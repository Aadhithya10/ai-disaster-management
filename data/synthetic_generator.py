import numpy as np
import pandas as pd

def simulate_safe(n):
    gas = np.random.normal(700, 80, n)
    flame = np.zeros(n)
    dev = np.random.normal(40, 20, n)
    label = ['SAFE'] * n
    return gas, flame, dev, label

def simulate_fire(n):
    gas = np.random.normal(800, 100, n)
    flame = np.ones(n)
    dev = np.random.normal(60, 25, n)
    label = ['FIRE'] * n
    return gas, flame, dev, label

def simulate_gas(n):
    gas = np.random.normal(1700, 150, n)
    flame = np.zeros(n)
    dev = np.random.normal(60, 30, n)
    label = ['GAS_LEAK'] * n
    return gas, flame, dev, label

def simulate_quake(n):
    gas = np.random.normal(700, 80, n)
    flame = np.zeros(n)
    dev = np.random.normal(400, 100, n)
    label = ['EARTHQUAKE'] * n
    return gas, flame, dev, label

def simulate_multi(n):
    gas = np.random.normal(1800, 150, n)
    flame = np.ones(n)
    dev = np.random.normal(450, 100, n)
    label = ['MULTI_HAZARD'] * n
    return gas, flame, dev, label

# generate data
N = 2000
gas1, flame1, dev1, lab1 = simulate_safe(N)
gas2, flame2, dev2, lab2 = simulate_fire(N)
gas3, flame3, dev3, lab3 = simulate_gas(N)
gas4, flame4, dev4, lab4 = simulate_quake(N)
gas5, flame5, dev5, lab5 = simulate_multi(N)

gas = np.concatenate([gas1,gas2,gas3,gas4,gas5])
flame = np.concatenate([flame1,flame2,flame3,flame4,flame5])
dev = np.concatenate([dev1,dev2,dev3,dev4,dev5])
label = lab1 + lab2 + lab3 + lab4 + lab5

df = pd.DataFrame({
    "gas": gas,
    "flame": flame,
    "dev_mg": dev,
    "label": label
})

df.to_csv("synthetic_disaster_data.csv", index=False)
print("Dataset generated!")
