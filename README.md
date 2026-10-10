# Tic Tac Toe

Jeu de morpion à deux joueurs, réalisé dans le cadre du cursus
[The Odin Project](https://www.theodinproject.com/).

**[Démo en ligne](#)** (à ajouter avec GitHub Pages)

## Stack

- HTML5, CSS3 (CSS Grid)
- JavaScript vanilla (ES modules)

## Architecture

- `Gameboard` (module pattern / IIFE) : état du plateau
- `createPlayer` (factory function) : joueurs et scores
- `GameController` (module pattern) : tours, victoire, égalité
- `DisplayController` (module pattern) : rendu DOM et événements

La logique de jeu ne dépend pas du DOM : elle peut être testée en console.

## Lancer le projet

Ouvrir avec Live Server (les modules ES nécessitent un serveur local).
