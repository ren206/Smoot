import Settings from './settings';
import Game from './game';

class GameView {
  constructor(canvasElement) {
    this.game = new Game();
    this.ctx = canvasElement.getContext('2d');
    this.canvas = canvasElement;
  }

  activateEventListeners() {
    this.canvas.addEventListener("mousemove", this.game.cannon.getMousePosition, false);
    // this.canvas.addEventListener("click", this.game.cannon.logMousePosition, false);
    this.canvas.addEventListener("click", this.game.cannon.fireSmoot);
  }

  deactivateEventListeners() {
    this.canvas.removeEventListener("mousemove", this.game.cannon.getMousePosition);
    this.canvas.removeEventListener("click", this.game.cannon.fireSmoot);
  }

  dimDisplay() {
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    this.ctx.fillRect(0, 0, Settings.BOARD.WIDTH, Settings.BOARD.HEIGHT);
  }

  drawGameOver() {
    const height = Settings.BOARD.HEIGHT;
    this.ctx.fillStyle = Settings.TEXT.COLOR;
    this.ctx.font = '36px "Russo One"';
    this.ctx.fillText('Game Over', 20, height - 180);
    this.ctx.fillText('Try Again?', 20, height - 140);
    this.ctx.fillText('Click anywhere or press any button...', 20, height - 100);
  }

  reset() {
    this.game.reset();
    this.start();
  }

  start(resetGameListener) {
    this.activateEventListeners();
    this.game.populateGrid();
    let intervalId = setInterval(() => {
      this.game.step();
      this.game.draw(this.ctx);
      if (this.game.hasEnded) {
        this.stop(intervalId);
        resetGameListener();
      }
    }, 10);
  }

  stop(intervalId) {
    // this.deactivateEventListeners();
    this.dimDisplay();
    this.drawGameOver();
    clearInterval(intervalId);
  }

}

export default GameView;
