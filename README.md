# Smoot

## Background
Smoot is a browser-based game inspired by Snood. The goal of the game is to clear the screen of the colorful circles before they reach the bottom.

## Functionality & MVP
In this game, the user will be able to:
- [ ] Aim and shoot the cannon loaded with a `Smoot`
- [ ] Save local high scores in a cookie

## Wireframes
* The app contains one screen with a grid on which there is a cannon at the bottom and `Smoot` pieces on the top initially

## Architecture and Technologies
In implementing this game, I will use the following libraries:
* `JavaScript`: for starting the game, advancing levels upon clearing the board, and determining the lose condition
* `Easel.js` with `HTML5 Canvas`: for DOM manipulation and rendering the grid of still and moving `Smoot` pieces
* Webpack: for bundling and serving up the various scripts.

There will be the following main scripts involved in this project:

`game_view.js`: this script will handle the logic of rendering updates to the DOM.

`game.js`: this script will hold a board and a `step()` method that is invoked each time the mouse is clicked. The `step()` method will call the `shoot()` method in `cannon.js` and decrement the height of the grid of `Smoot` pieces.

`board.js`: this script will ensure that `Smoot` pieces stay within bounds and that they are able to `bounce()` at an appropriate angles when they reach the wall.

`cannon.js`: this script will hold a randomly generated `Smoot` piece and a shoot() method. This
method will send the `Smoot` piece to the `game_view` and generate another `Smoot`.

`smoot.js`: this script will hold the `Smoot` class. This class holds a `Boolean` property of `moving` and a `color` property. It will have a method stop() for when it touches another `Smoot`. It will have a `neighbor_match` method to check if 2+ of its neighbor pieces are of the same `color`; if so, it will invoke its `destroy()` function.

#Implementation Timeline#

**Day 1**: Set up Node modules, including getting Webpack up and running. Create webpack.config.js and package.json. Write a skeleton of the main script files. Start rendering some basic aspects. Goals for the day:
* Get a green bundle with webpack
* Render the board and a placeholder for the cannon

**Day 2**: Learn more Canvas. Implement the board, cannon, and moving pieces logic. Allow pieces to clear upon 3+ matching adjacent pieces. Implement the step() method so that the grid descends upon click.

**Day 3**: Implement the game logic and account for edge cases.

**Day 4**: Improve styling as necessary.
