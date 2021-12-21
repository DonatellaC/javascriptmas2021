const speedometer = document.getElementById("speedometer");
const select = document.getElementById("select");
const time = document.getElementById("time");
let currentLocation = "";
let timeTaken = 0;

let destination = [
  {
    name: "Munich",
    distanceFromPrevDestination: 2892,
  },
  {
    name: "Kiev",
    distanceFromPrevDestination: 1111,
  },
  {
    name: "Ulaanbaatar",
    distanceFromPrevDestination: 5324,
  },
  {
    name: "Sydney",
    distanceFromPrevDestination: 5458,
  },
  {
    name: "Tijuana",
    distanceFromPrevDestination: 6531,
  },
  {
    name: "Chicago",
    distanceFromPrevDestination: 1729,
  },
];

function calculateSpeed() {
  let speed = 0;
  let distance = 0;
  currentLocation = select.value;
  destination.forEach((christmasLocation) => {
    if (christmasLocation.name === currentLocation) {
      distance = christmasLocation.distanceFromPrevDestination;
    }
  });
  if (time.value > 0) {
    speed = Math.round(distance / time.value);
    speedometer.innerHTML = `The average speed is: ${speed} Km/h 🦌`;
  } else {
    speedometer.innerHTML = "Select a Journey time";
  }
}

select.addEventListener("change", calculateSpeed);
time.addEventListener("change", calculateSpeed);

// Task:
// - Retrieve distance from previous destination from array of objects.
// - Calculate speed and round speed to an integer (whole number).
// - Display speed in speedometer paragraph.
