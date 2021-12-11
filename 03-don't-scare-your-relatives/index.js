const greeting = document.getElementById("greeting");
const btn = document.getElementById("btn");
const container = document.getElementById("container");
const christmasStyle = document.querySelector("christmasStyle");
const snowStyle = document.querySelector("snowStyle");
const body = document.getElementById("body");

let backgroundChristmas =
  "https://image.freepik.com/free-vector/reindeer-santa-hat-peeping-out_1262-6856.jpg";

let backgroundSnow =
  "https://image.freepik.com/free-vector/winter-landscape-scene_1284-3670.jpg";

function fix() {
  // Task:
  // - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
  // - Run the function when the Fix button is clicked.

  function addChristmasMessage() {
    if ((greeting.innerHTML = "Merry Christmas")) {
      body.style.backgroundImage = `url(${backgroundChristmas})`;
      container.classList.remove("container");
      container.classList.add("christmasStyle");
      btn.innerHTML = "Fa la la";
    }

    if ((btn.innerHTML = "Fa la la")) {
      btn.addEventListener("click", () => {
        body.style.backgroundImage = `url(${backgroundSnow})`;
        btn.style.visibility = "hidden";
        container.classList.remove("christmasStyle");
        container.classList.add("snowStyle");
        greeting.innerHTML = "Happy Holidays!";
      });
    }
  }

  btn.addEventListener("click", () => {
    addChristmasMessage();
  });
}

fix();
//Stretch goals:
// - Add an extra theme, and the option to switch between them.
// - Change the message and theme to a New Year’s one automatically on December 31st.
