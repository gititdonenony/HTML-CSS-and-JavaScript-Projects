
//background colors
const colors = [
"lightblue", "salmon", "lightgreen",
"orange", "violet", "beige",
"khaki", "tomato", "skyblue", "gold"
];

// get button and colorDisplay element

const button = document.getElementById("colorBtn");
const colorDisplay = document.getElementById("colorName")

// add a click event

button.addEventListener("click", () =>{
    // Generate a random index
    const randomNumber = Math.floor(Math.random() * colors.length);

    // pick a random color
    const randomColor = colors[randomNumber];

    // change background and update text

    document.body.style.backgroundColor = randomColor;
    colorDisplay.textContent = `Current Color: ${randomColor}`;
});

