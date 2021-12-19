const btn = document.getElementById("btn");
let foodishUrl = "https://foodish-api.herokuapp.com/api/images/dessert";

/* Task:
Call the Foodish API (https://foodish-api.herokuapp.com/) and display random images of desserts on the click of a button.

Specific URL to get a random dessert image: 
https://foodish-api.herokuapp.com/api/images/dessert
*/

const findYum = async () => {
  const response = await fetch(foodishUrl);
  const data = await response.json();
  foodHolder.innerHTML = `<img src="${data.image}">`;
};

btn.addEventListener("click", findYum);
