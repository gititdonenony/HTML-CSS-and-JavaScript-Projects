
// Prevent form from submitting and reloading the page to handle validation manually
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Clear errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    // Validation flags
    let isValid = true;

    // Validate name
    if (name === "") {
        nameError.textContent = "Name is required!"
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email.";
        isValid = false;
    }

    // Validate message
    if (message === "") {
        messageError.textContent = "Message cannot be empty.";
        isValid = false;
    }
    // If all valid
    if (isValid) {
        alert("Form submitted successfully!");
        // You can also reset the form if needed
        document.getElementById("contactForm").reset();
    }
});
