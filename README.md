# Tic Tac Toe

Jeu de morpion à deux joueurs, réalisé dans le cadre du cursus
[The Odin Project](https://www.theodinproject.com/).

**[Jouer en ligne](https://maheninanatacha-jpg.github.io/tic-tac-toe/)**



## Fonctionnalités

- Saisie du nom des deux joueurs (noms par défaut si les champs sont vides)
- Détection de la victoire (8 combinaisons) et du match nul
- Refus des coups sur une case déjà occupée
- Bouton pour recommencer une partie
- Interface adaptée aux écrans mobiles

## Stack

- HTML5, CSS3 (CSS Grid, variables CSS)
- JavaScript vanilla (modules ES)
- Déployé avec GitHub Pages

## Architecture

| Module | Pattern | Rôle |
|---|---|---|
| `GameBoard` | IIFE (module pattern) | État du plateau, encapsulé par closure |
| `createPlayer` | Factory function | Joueurs et scores |
| `GameController` | IIFE | Tours, victoire, égalité, messages |
| `DisplayController` | IIFE | Rendu DOM et événements (délégation d'événements) |

La logique de jeu est indépendante du DOM : `test.js` permet de la vérifier avec Node (`node test.js`).

## Lancer le projet

Les modules ES nécessitent un serveur local. Avec l'extension **Live Server** de VS Code, ouvre `index.html` via « Go Live ».

## Ce que j'ai appris

- Encapsulation avec les closures et le module pattern
- Séparation de la logique de jeu et de l'affichage
- Délégation d'événements et manipulation du DOM
- Organisation du code en modules ES
- Workflow Git/GitHub : commits, SSH, déploiement GitHub Pages