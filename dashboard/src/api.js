export async function getPrediction(gas, flame, dev_mg) {
  const params = new URLSearchParams({ gas, flame, dev_mg }).toString();
  const res = await fetch(`http://127.0.0.1:8000/predict?${params}`);
  return res.json();
}
