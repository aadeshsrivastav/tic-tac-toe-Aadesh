let items = document.querySelectorAll("li");
let turn = "X";
let winnerDisplay = document.getElementById("winnerDisplay");
let gameOver = false;
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], 
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6] 
];
function checkWinner() {
  for (let combo of winningCombos) {
    let [a, b, c] = combo;
    if (
      items[a].textContent &&
      items[a].textContent === items[b].textContent &&
      items[b].textContent === items[c].textContent
    ) {
      winnerDisplay.textContent = `Winner is 🏆- ${items[a].textContent}`;
      winnerDisplay.style.color='Black';
      items[a].classList.add("winning");
      items[b].classList.add("winning");
      items[c].classList.add("winning");
      gameOver = true;
      return;
    }
  }
}
items.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.textContent === "" && !gameOver) {
      item.textContent = turn;
      item.style.color = turn === "X" ? "red" : "green";
      checkWinner();
      turn = turn === "X" ? "O" : "X";
    }
  });
});
document.getElementById("btn").addEventListener("click", function () {
  location.reload();
});
