const inputs = document.querySelectorAll(".controls input");
const color = document.getElementById("color");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
const eyes = document.querySelectorAll(".eye");
const nose = document.querySelector(".nose");
const buttons = document.querySelectorAll(".button");

// Task:
// Write a function to update the snowman colors according to the colors selected from the pickers.

const changeEyeColor = () => {
  eyes.forEach((eye) => {
    eye.style.backgroundColor = color.value;
  });
};

const changeNoseColor = () => {
  nose.style.borderColor = `transparent transparent transparent ${color3.value}`;
};

const changeButtonColor = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = color2.value;
  });
};

color.addEventListener("change", changeEyeColor);
color3.addEventListener("change", changeNoseColor);
color2.addEventListener("change", changeButtonColor);
