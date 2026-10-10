import { createPlayer } from "./gameboard.js";
import { GameBoard } from "./gameboard.js";
const GameController = (() => {
  const players = [
    createPlayer("Joueur 1", "X"),
    createPlayer("Joueur 2", "O"),
  ];
  let currentPlayer = players[0];
  let gameOver = false;

  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // lignes
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // colonnes
    [0, 4, 8], [2, 4, 6],            // diagonales
  ];

  const switchPlayer = () => {
    // si currentPlayer est players[0], passer à players[1], et inversement
    currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
  };

  const checkWin = () => {
    // retourner true si une des combinaisons est remplie
    // par le même symbole (celui de currentPlayer), sinon false
    const board = GameBoard.getBoard();
    return winningCombos.some(combo => {
      return combo.every(index => board[index] === currentPlayer.mark);
    });
  };

  const checkTie = () => {
    // retourner true si aucune case n'est vide
    if (GameBoard.getBoard().every(cell => cell !== "")) {
      return true;
    }
    else {
      return false;
    }
  };

  let message = "";
  const playRound = (index) => {
    // 1. si gameOver, ne rien faire
    if (gameOver) {
      return;
    }
    // 2. placer le symbole avec GameBoard.placeMark
    //    (si ça retourne false, afficher un message et s'arrêter)
    if (!GameBoard.placeMark(index, currentPlayer.mark)) {
      message = "Case déjà occupée !";
      return;
    }

    // 3. si checkWin() : afficher le gagnant, gameOver = true
    if (checkWin()) {
      message = `${currentPlayer.name} a gagné !`;
      gameOver = true;
    }
    else if (checkTie()) {
      message = "Match nul !";
      gameOver = true;
    }
    else {
      switchPlayer();
    }

  }

  const resetGame = () => {
    GameBoard.resetBoard();
    currentPlayer = players[0];
    gameOver = false;
  };




  return { 
    playRound, 
    getCurrentPlayer: () => currentPlayer, 
    getMessage: () => message, 
    resetGame, 
    getCurrentPlayer: () => currentPlayer, 
    getMessage: () => message, 
    isGameOver: () => gameOver };
})();

