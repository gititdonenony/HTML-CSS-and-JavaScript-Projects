// Grab references to DOM elements
const typingArea = document.getElementById("typingArea");
const timerDisplay = document.getElementById("timer");
const result = document.getElementById("result");
const startBtn = document.getElementById("startBtn");

// Set initial timer value and control flags
let timeLeft = 30;       // Total time in seconds
let timer;               // Will hold the interval ID
let started = false;     // Flag in case you want to track session state (not used here yet)

// Event listener for "Start Test" button
startBtn.addEventListener("click", () => {
    // Reset everything for a fresh test
    typingArea.value = "";           // Clear previous text
    typingArea.disabled = false;    // Enable typing field
    typingArea.focus();             // Put cursor into typing field
    result.textContent = "";        // Clear previous result
    timeLeft = 30;                  // Reset timer
    timerDisplay.textContent = `Time: ${timeLeft}s`; // Update timer display

    // Clear any existing timer before starting a new one
    if (timer) clearInterval(timer);

    // Start a countdown timer using setInterval
    timer = setInterval(() => {
        timeLeft--; // Decrease time by 1 second
        timerDisplay.textContent = `Time: ${timeLeft}s`; // Update UI

        // When time runs out, stop the test
        if (timeLeft === 0) {
            clearInterval(timer);          // Stop the timer
            typingArea.disabled = true;    // Disable further typing
            const wordCount = countWords(typingArea.value); // Count the words typed
            result.textContent = `Time's up! You typed ${wordCount} words. WPM: ${wordCount * 2}`; // Show result
            // Note: Assumes 30-second session, so WPM is roughly double the word count
        }
    }, 1000); // Run every second
});

// Function to count words in a given string
function countWords(str) {
    return str
        .trim()                            // Remove leading/trailing whitespace
        .split(/\s+/)                      // Split by one or more spaces
        .filter(word => word.length > 0)   // Filter out any empty strings
        .length;                           // Return word count
}
