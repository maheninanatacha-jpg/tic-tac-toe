import { createPlayer } from "./player.js";
import { GameBoard } from "./gameboard.js";
export const GameController = (() => {
  let players = [
    createPlayer("Joueur X", "X"),
    createPlayer("Joueur O", "O"),
  ];
  
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

  const turnMessage = () =>
  `Au tour de ${currentPlayer.name} (${currentPlayer.mark})`;

  let message = turnMessage();
  
  const playRound = (index) => {
  if (gameOver) return;

  if (!GameBoard.placeMark(index, currentPlayer.mark)) {
    message = "Case déjà occupée !";
    return;
  }

  if (checkWin()) {
    message = `${currentPlayer.name} a gagné !`;
    gameOver = true;
  } else if (checkTie()) {
    message = "Match nul !";
    gameOver = true;
  } else {
    switchPlayer();
    message = turnMessage();
  }
};

  const resetGame = () => {
    GameBoard.resetBoard();
    currentPlayer = players[0];
    gameOver = false;
    message = turnMessage();
  };


  let setPlayers = (name1, name0) => {
    const finalName1 = name1.trim() === "" ? "Joueur X" : name1.trim();
    const finalName0 = name0.trim() === "" ? "Joueur O" : name0.trim();
    players = [
      createPlayer(finalName1, "X"),
      createPlayer(finalName0, "O"),
    ];
    currentPlayer = players[0];
    resetGame();  
  };




  return { 
    playRound, 
    getCurrentPlayer: () => currentPlayer, 
    resetGame,     
    setPlayers,
    getMessage: () => message, 
    isGameOver: () => gameOver };
})();

