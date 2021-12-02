const body = document.getElementById("body");
const greeting = document.getElementById("greeting");
const christmasBtn = document.getElementById("christmas");
const snowBtn = document.getElementById("snow");
const threeBtn = document.getElementById("three");

// Task:
//- Add the functionality to switch the theme between 'Christmas', 'snow' and 'three'.
christmasBtn.addEventListener("click", () => {
  body.className = "christmas";
  greeting.innerHTML = "🎅 Merry Christmas!";
});

snowBtn.addEventListener("click", () => {
  body.className = "snow";
  greeting.innerHTML = "☃️ Happy Christmas!";
});

threeBtn.addEventListener("click", () => {
  body.className = "three";
  greeting.innerHTML = "🎄 Happy Holidays!";
});
