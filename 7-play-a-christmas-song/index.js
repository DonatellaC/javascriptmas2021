const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const stopBtn = document.getElementById("stop-btn");

const song = document.getElementById("myAudio");

function playAudio() {
  song.play();
}

function pauseAudio() {
  song.pause();
}

function stopAudio() {
  song.pause();
  song.currentTime = 0;
}

// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).

playBtn.addEventListener("click", () => {
  playAudio();
});

pauseBtn.addEventListener("click", () => {
  pauseAudio();
});

stopBtn.addEventListener("click", () => {
  stopAudio();
});
