// Get the clock element from the DOM
const clock = document.getElementById("digitalClock");

// Function to update the time
const updateClock = () => {
  const now = new Date();

  // Format time to HH:MM:SS
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Display the formatted time
  clock.textContent = `${hours}:${minutes}:${seconds}`;
};

// Initiate the function
updateClock();

// Set intervals to update time every second
setInterval(() => updateClock(), 1000);
