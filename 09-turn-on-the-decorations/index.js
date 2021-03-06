const house = document.getElementById("house");
const decorator = document.getElementById("decorator");
decorator.addEventListener("click", deckTheHalls);

function deckTheHalls(e) {
  // Task:
  // Write a function to add decorations (e.g. โ๏ธ, ๐, etc) next to the house when the switch is toggled.
  if (decorator.checked == true) {
    house.textContent = "๐๐กโ๏ธ";
  } else {
    house.textContent = "๐ก";
  }
}

// Stretch goals:
// - Make sure that the house & decorations all stay on one line, even if there are a lot of decorations.
// - Allow the user to select different decorations.
