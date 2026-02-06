const colorButton = document.getElementById("color-button");
const header = document.getElementById("header");
const currentColor = document.getElementById("current-color");
let myColors = ["#dd5353", "#559c55", "#1a1a6a", "#000000", "#464612", "#012121", "#bdaf94", "#957e83"];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

colorButton.addEventListener("click", () => {
    myColors = shuffle(myColors);
    const randomColor = myColors[0]
    document.body.style.backgroundColor = myColors[0];
    if (randomColor === "#000000" || randomColor === "#012121") {
        currentColor.style.color = "white";
        header.style.color = "white";
    }
    currentColor.textContent = `Hex Code: ${randomColor}` // show color
});
