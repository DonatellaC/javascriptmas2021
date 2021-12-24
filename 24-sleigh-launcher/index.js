const crew = document.getElementById("crew");
const btn = document.getElementById("btn");

// Task:
// - Write a function to launch the sleigh!
// - See CSS for more tasks.

const sleighAnimation = () => {
  crew.classList.add("slide-out-elliptic-right-bck");
};

btn.addEventListener("click", sleighAnimation);
