const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

// Handle button clicks
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    // Clear the display
    if (value === "C") {
      expression = 0;

    // Evaluate the expression
    } else if (value === "=") {
      try {
        expression = eval(expression).toString();
      } catch {
        expression = "Error";
      }

    // Append number or operator
    } else {
      expression += value;
    }

    // Update the display
    display.value = expression;
  });
});
