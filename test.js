import { GameController } from "./gameController.js";

GameController.playRound(0);
console.log(GameController.getMessage()); // "Au tour de Joueur 2 (O)"
GameController.playRound(0);
console.log(GameController.getMessage()); // "Case déjà occupée !"
GameController.resetGame();

[0, 1, 4, 2, 8].forEach(i => GameController.playRound(i));
console.log(GameController.getMessage()); // "Joueur 1 a gagné !"
GameController.resetGame();

[0, 1, 2, 4, 3, 5, 7, 6, 8].forEach(i => GameController.playRound(i));
console.log(GameController.getMessage()); // "Match nul !"
GameController.resetGame();