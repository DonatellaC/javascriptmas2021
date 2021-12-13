const btn = document.getElementById("btn");
let food = document.getElementById("food");
const numInput = document.getElementById("num-input");
const vegetarianInput = document.getElementById("vegetarian-input");

// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. Don't forget to check whether the meal should be vegetarian!

const vegetarian = "nut roast";
const mealFor4PeopleOrLess = "turkey";
const mealFor5PeopleOrMore = "goose";

const dinnerCalculator = () => {
  if (
    (numInput.value <= 4) &
    (numInput.value >= 1) &
    (vegetarianInput.checked === false)
  ) {
    food.textContent = mealFor4PeopleOrLess;
  } else if ((numInput.value >= 5) & (vegetarianInput.checked === false)) {
    food.textContent = mealFor5PeopleOrMore;
  } else if ((numInput.value >= 1) & (vegetarianInput.checked === true)) {
    food.textContent = vegetarian;
  } else if (numInput.value == 0) {
    food.textContent = "...";
  }
};

btn.addEventListener("click", dinnerCalculator);
// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.
