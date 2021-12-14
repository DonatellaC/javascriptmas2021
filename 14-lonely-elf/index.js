const elf = document.getElementById("elf");
const btn = document.getElementById("btn");
const btn_tool = document.getElementById("btn-tool");

btn.addEventListener("click", duplicateElf);
btn_tool.addEventListener("click", toolElfUp);

function duplicateElf() {
  elf.textContent += "🧝";
  // Task:
  // - Write a function to duplicate the elf when the button is clicked.
  // - See index.css for optional styling challenges.
}

function toolElfUp() {
  const tools = ["🔮", "🔥", "🏹", "🪄"];
  const randomTools = Math.floor(Math.random() * tools.length);
  elf.textContent += tools[randomTools];
}

// Stretch goals:
// - Write a function to give the elves some tools, or a cup of tea!
// - Limit the total number of elves to 100.
