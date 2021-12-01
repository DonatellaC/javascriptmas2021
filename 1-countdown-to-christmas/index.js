const countdownDisplay = document.getElementById("countdown-display");

function renderCountdown() {
  const christmas = 25;
  // - Get today's date
  const todayDate = new Date().getDate();
  // - Calculate remaining days.
  const countdown = christmas - todayDate;
  // - Display remaining days in countdownDisplay.
  countdownDisplay.innerHTML = countdown;
}

renderCountdown();
