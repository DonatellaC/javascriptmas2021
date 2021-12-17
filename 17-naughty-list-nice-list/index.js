const niceList = document.getElementById("nice-list");
const naughtyList = document.getElementById("naughty-list");
const btn = document.getElementById("btn");

const sorteesArr = [
  {
    name: "David",
    hasBeenGood: false,
  },
  {
    name: "Del",
    hasBeenGood: true,
  },
  {
    name: "Valerie",
    hasBeenGood: false,
  },
  {
    name: "Astrid",
    hasBeenGood: true,
  },
];

// Task:
// - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.

const sort = () => {
  for (let i = 0; i < sorteesArr.length; i++) {
    if (sorteesArr[i].hasBeenGood === false) {
      naughtyList.innerHTML += `<ul> <li> ${sorteesArr[i].name} </li> </ul>`;
    }
    if (sorteesArr[i].hasBeenGood === true) {
      niceList.innerHTML += `<ul> <li> ${sorteesArr[i].name} </li> </ul>`;
    }
  }
};
btn.addEventListener("click", sort);
