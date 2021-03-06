const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const stopBtn = document.getElementById("stop-btn");
const bell = document.getElementById("bell");
const body = document.getElementById("body");
const audio = new Audio("bells.mp3");
playBtn.addEventListener("click", play);
pauseBtn.addEventListener("click", pause);
stopBtn.addEventListener("click", stop);

let backgroundSnow =
  "https://image.freepik.com/free-vector/unfocused-winter-landscape-with-snowflakes_1393-210.jpg";

function play() {
  audio.play();
  bell.classList.add("animate");
  bell.style.animationPlayState = "running";
  body.style.background = `url(${backgroundSnow})center center no-repeat fixed`;
  body.style.backgroundSize = "cover";
}

function pause() {
  audio.pause();
  bell.style.animationPlayState = "paused";
}

function stop() {
  audio.pause();
  audio.currentTime = 0;
  bell.classList.remove("animate");
}

// Task:
// - Animate the bell so that it looks like it is ringing when the music is playing, and stops when the music is paused or stopped.

//NB: You'll need to make changes in the CSS too 😉

// Stretch goal:
// - Make sure the animation doesn't reset when paused.
