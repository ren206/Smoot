import GameView from './game_view';
import Game from './game';
import Settings from './settings';

document.addEventListener("DOMContentLoaded", () => {
  const canvasElement = document.getElementsByTagName("canvas")[0];
  canvasElement.width = Settings.BOARD.WIDTH;
  canvasElement.height = Settings.BOARD.HEIGHT;
  canvasElement.style.cursor = "none"; // TODO: move to CSS

  const ctx = canvasElement.getContext("2d");
  // const game = new Game();
  let gameView = new GameView(canvasElement);
  gameView.start(resetListener);

  let resetGameView = function() {
    gameView = new GameView(canvasElement);
    gameView.start(resetListener);
    document.removeEventListener('keypress', resetGameView, false);
    document.removeEventListener('click', resetGameView, false);
  };

  function resetListener() {
    document.addEventListener('keypress', resetGameView, false);
    document.addEventListener('click', resetGameView, false);
  }

})
