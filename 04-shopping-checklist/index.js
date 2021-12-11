const items = ["Candles", "Decorations", "Chocolate"];
const checklist = document.getElementById("checklist");

// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.

for (let i = 0; i < items.length; i++) {
  checklist.innerHTML +=
    "<div class='checklist-item'>" +
    "<label> " +
    items[i] +
    "</label>" +
    "<input type='checkbox' id='checklist'/>" +
    "<button id='button'>Delete</button>" +
    "</div>";
}
const buttons = document.querySelectorAll("#button");
buttons.forEach((button) => {
  button.onclick = () => deleteItem(button);
});

function deleteItem(button) {
  button.parentElement.remove();
}

// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.
