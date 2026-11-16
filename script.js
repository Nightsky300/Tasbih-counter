let count = 0;

let number = document.getElementById("count");
let button = document.getElementById("btn");
let reset = document.getElementById("reset");

// Arrow function
const myFunct = () => {
    count++;
    number.innerHTML = count;
};

// Click event
button.addEventListener("click", myFunct);

// Reset function
const resetCounter = () => {
    count = 0;
    number.innerHTML = count;
};

reset.addEventListener("click", resetCounter);