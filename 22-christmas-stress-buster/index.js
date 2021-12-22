const btn = document.getElementById("btn");
let timer = document.getElementById("timer");
let affirmation = document.getElementById("affirmation");
let timeout;
let timeLeft = 900;

// Task:
// - Write a function to start the countdown timer on the button click and display it in the DOM. Stop the timer when it reaches 0.

const startCountdown = () => {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = Math.floor(timeLeft % 60);
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  timer.textContent = `${minutes}:${seconds}`;
  timeLeft--;

  if (timeLeft < 0) {
    clearTimeout(timeout);
    timer.textContent = "00:00";
  }
};

btn.addEventListener("click", () => {
  timeout = setInterval(startCountdown, 1000);
});
