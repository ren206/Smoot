import GameView from './game_view';
import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
  const canvasElement = document.getElementsByTagName("canvas")[0];
  canvasElement.width = Game.WIDTH;
  canvasElement.height = Game.HEIGHT;
  canvasElement.style.cursor = "none"; // TODO: move to CSS

  const ctx = canvasElement.getContext("2d");
  const game = new Game();
  const gameView = new GameView(game, ctx);
  gameView.start();

  window.game = game;
  window.gameView = gameView;
})
