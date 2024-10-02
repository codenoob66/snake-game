document.addEventListener("DOMContentLoaded", () => {
  const score = document.getElementById("score");
  const scoreDisplay = document.getElementById("score");
  const width = 28;
  const gameContainer = document.querySelector(".game-container");

  const layout = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 1,
  ];

  const squares = [];

  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement("div");
      square.id = i;
      gameContainer.appendChild(square);
      squares.push(square);

      if (layout[i] === 0) {
        squares[i].classList.add("game-border");
      }

      if (layout[i] === 1) {
        squares[i].classList.add("empty-space");
      }
    }
  }
  createBoard();
});
