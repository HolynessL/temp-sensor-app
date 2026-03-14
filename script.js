let threshold = null;
let tempValue = 0;

// Set threshold
document.getElementById('setThresholdBtn').addEventListener('click', () => {
  const input = document.getElementById('thresholdInput').value;
  threshold = parseFloat(input);
  if (!isNaN(threshold)) {
    document.getElementById('alertMessage').textContent = `Threshold set at ${threshold}°C`;
  }
});

// Simulate temperature reading (later this can be replaced with backend fetch)
document.getElementById('simulateBtn').addEventListener('click', () => {
  tempValue = (Math.random() * 50).toFixed(1); // random temperature 0–50°C
  document.getElementById('tempValue').textContent = tempValue;

  // Check threshold
  if (threshold !== null && tempValue > threshold) {
    document.getElementById('alertMessage').textContent = `⚠️ ALERT! Temperature ${tempValue}°C exceeds threshold!`;
  } else if (threshold !== null) {
    document.getElementById('alertMessage').textContent = `Temperature ${tempValue}°C is below threshold.`;
  }
});