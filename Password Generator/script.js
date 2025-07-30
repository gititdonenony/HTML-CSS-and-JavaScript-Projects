
// Listen for a click on the "Generate Password" button
document.getElementById("generate").addEventListener("click", function () {
    // Get user input for password length
    const length = parseInt(document.getElementById("length").value);

    // Check which character types should be included
    const includeLower = document.getElementById("lowercase").checked;
    const includeUpper = document.getElementById("uppercase").checked;
    const includeNumber = document.getElementById("numbers").checked;
    const includeSymbol = document.getElementById("symbols").checked;

    // Get the field where the result will be displayed
    const resultField = document.getElementById("result");

    // Define character sets
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()-_=+[]{};:,.<>?";

    // Initialize variables to build the character pool and final password
    let availableChars = "";
    let password = "";

    // Build the character pool based on selected options
    if (includeLower) availableChars += lowercaseChars;
    if (includeUpper) availableChars += uppercaseChars;
    if (includeNumber) availableChars += numberChars;
    if (includeSymbol) availableChars += symbolChars;

    // If no character type is selected, show an error message and exit
    if (availableChars.length === 0) {
        resultField.value = "Please select at least one option";
        return;
    }

    // Generate the password by picking random characters from the pool
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        password += availableChars[randomIndex];
    }

    // Display the generated password in the result input field
    resultField.value = password;
});
