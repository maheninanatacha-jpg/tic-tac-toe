# Tic Tac Toe

Jeu de morpion à deux joueurs en JavaScript vanilla, réalisé dans le cadre du cursus [The Odin Project](https://www.theodinproject.com/). La logique de jeu est séparée de l'interface et organisée en modules.

**[▶ Jouer en ligne](https://maheninanatacha-jpg.github.io/tic-tac-toe/)**

![Capture d'écran du jeu](screenshot.png)

## Fonctionnalités

- Saisie du nom des joueurs (noms par défaut « Joueur X » et « Joueur O » si les champs sont vides)
- Détection de la victoire (8 combinaisons) et du match nul
- Refus des coups sur une case déjà occupée, sans perdre son tour
- Blocage du plateau après la fin de la partie
- Bouton pour recommencer
- X et O de couleurs différentes, interface adaptée aux écrans mobiles

## Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222?logo=github&logoColor=white)

- HTML5, CSS3 (Grid, Flexbox, variables CSS)
- JavaScript vanilla (modules ES), sans framework ni dépendance
- Déploiement avec GitHub Pages

## Architecture

| Module | Pattern | Rôle |
|---|---|---|
| `gameboard.js` | IIFE (module pattern) | État du plateau, privé grâce à une closure |
| `player.js` | Factory function | Création des joueurs (nom, symbole, score privé) |
| `gameController.js` | IIFE | Tours, victoire, égalité, messages |
| `displayController.js` | IIFE | Rendu DOM et événements (délégation d'événements) |

### Choix de conception

- **Encapsulation** : le tableau du plateau n'est jamais exposé, `getBoard()` retourne une copie.
- **Séparation des responsabilités** : `GameController` ne manipule pas le DOM. Il expose son état (`getMessage`, `isGameOver`), et `DisplayController` l'affiche.
- **Un seul écouteur de clic** sur le plateau (délégation d'événements), même si les cases sont recréées à chaque rendu.

## Structure du projet

```
tic-tac-toe/
├── index.html
├── style.css
├── gameboard.js
├── player.js
├── gameController.js
├── displayController.js
└── test.js
```

## Lancer le projet

Les modules ES nécessitent un serveur local (l'ouverture directe du fichier ne fonctionne pas).

```bash
git clone https://github.com/maheninanatacha-jpg/tic-tac-toe.git
cd tic-tac-toe
```

Puis ouvre `index.html` avec l'extension **Live Server** de VS Code (« Go Live »).

## Tests

La logique de jeu étant indépendante du DOM, elle se vérifie en console avec Node :

```bash
node test.js
```

## Ce que j'ai appris

- Closures et module pattern pour encapsuler l'état
- Factory functions pour créer des objets indépendants
- Séparation de la logique métier et de l'affichage
- Manipulation du DOM et délégation d'événements
- Organisation du code en modules ES
- Workflow Git/GitHub : commits, SSH, déploiement

## Pistes d'amélioration

- Afficher le score de chaque joueur sur plusieurs parties
- Surligner les trois cases gagnantes
- Ajouter un mode contre l'ordinateur

## Licence

MIT