class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.canvas = ctx.canvas;
    this.board = this.game.board;
  }

  start() {
    // this.game.draw(this.ctx);
    this.canvas.addEventListener("mousemove", this.game.cannon.getMousePosition, false);
    // this.canvas.addEventListener("click", this.game.cannon.logMousePosition, false);
    this.canvas.addEventListener("click", this.game.cannon.fireSmoot);
    requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    this.game.step();
    this.game.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }
}

export default GameView;
