// Task:
// - Write a function to update the Santa Stop Here sign with the user's own text.
const sign = document.getElementById("sign");
const textInput = document.getElementById("text-input");

const updateSign = () => {
  let userText = textInput.value;
  sign.textContent = userText;
};

textInput.addEventListener("keyup", updateSign);
