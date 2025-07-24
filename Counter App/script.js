// Initialize counter variable to track the current count
let count = 0;

// Get reference to the HTML element that displays the count value
const value = document.querySelector("#value");

// Get references to all buttons with the "btn" class
const buttons = document.querySelectorAll(".btn");

// Loop through each button and add event listeners
buttons.forEach(function(btn) {
  // Add click event listener to each button
  btn.addEventListener("click", function(e) {
    // Get the CSS classes of the clicked button
    const styles = e.currentTarget.classList;

    // Check which type of button was clicked and update count accordingly
    if (styles.contains("decrease")) {
      // If button has "decrease" class, subtract 1 from count
      count--;
    } else if (styles.contains("increase")) {
      // If button has "increase" class, add 1 to count
      count++;
    } else {
      // If button has neither class (likely a reset button), set count to 0
      count = 0;
    }

    // Update the displayed value in the HTML element
    value.textContent = count;

    // Change the text color based on the count value
    if (count > 0) {
      // Positive numbers display in green
      value.style.color = "green";
    } else if (count < 0) {
      // Negative numbers display in red
      value.style.color = "red";
    } else {
      // Zero displays in dark gray
      value.style.color = "#333";
    }
  });
});