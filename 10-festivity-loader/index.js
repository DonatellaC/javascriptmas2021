const meter = document.getElementById("meter");

// Task:
// Write a function to wire up the festivity loader to reflect how many days are remaining until Christmas!

function loader() {
  const todayDate = new Date().getDate();
  meter.setAttribute("value", todayDate);
}

loader();
