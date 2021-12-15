const languageSelector = document.getElementById("language-selector");
const greetingDisplay = document.getElementById("greeting-text");
languageSelector.addEventListener("change", translate);

const greetingsArr = [
  {
    language: "English",
    greeting: "Merry Christmas!",
  },
  {
    language: "Spanish",
    greeting: "Feliz Navidad!",
  },
  {
    language: "Ukrainian",
    greeting: "щасливого Різдва!",
  },
  {
    language: "Welsh",
    greeting: "Nadolig Llawen!",
  },
];

function translate() {
  // Task:
  // - Write a function to display the correct greeting when a language is selected.
  for (let i = 0; i < greetingsArr.length; i++) {
    if (languageSelector.value === greetingsArr[i].language) {
      greetingDisplay.innerHTML = greetingsArr[i].greeting;
    }
  }
}
