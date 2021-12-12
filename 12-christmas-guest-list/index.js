const input = document.getElementById("input");
const btn = document.getElementById("btn");
let guestList = document.getElementById("guest-list");

let guests = [
  "Partner",
  "Nice Relative 1",
  "Nice Relative 2",
  "Evil Relative",
  "Lonely Neighbour",
];

for (let i = 0; i < guests.length; i++) {
  guestList.innerHTML += "<li> " + guests[i] + "</li>";
}

const addGuest = (e) => {
  e.preventDefault();
  const newGuest = input.value;
  if (newGuest.length > 0) {
    guests.push(newGuest);
    guestList.innerHTML += "<li> " + newGuest + "</li>";
    input.value = "";
  }
};

btn.addEventListener("click", addGuest);

// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.
