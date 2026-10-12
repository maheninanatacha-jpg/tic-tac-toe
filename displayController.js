import { GameBoard } from "./gameboard.js";
import { GameController } from "./gameController.js";

const DisplayController = (() => {
  const boardDiv = document.querySelector("#board");
  const messageDiv = document.querySelector("#message");

  const render = () => {
  boardDiv.textContent = "";
  GameBoard.getBoard().forEach((mark, index) => {
    const cell = document.createElement("button");
    cell.classList.add("cell");
    cell.textContent = mark;
    if (mark === "X") cell.classList.add("x");
    if (mark === "O") cell.classList.add("o");
    cell.dataset.index = index;
    boardDiv.appendChild(cell);
  });
  messageDiv.textContent = GameController.getMessage();
};

  boardDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("cell")) {
      GameController.playRound(Number(e.target.dataset.index));
      render();
    }
  });

  document.querySelector("#restart").addEventListener("click", () => {
    GameController.resetGame();
    render();
  });

  document.querySelector("#players-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const nameX = document.querySelector("#name-x").value;
    const nameO = document.querySelector("#name-o").value;
    GameController.setPlayers(nameX, nameO);
    render();
  });

  render();
})();