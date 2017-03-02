class Gameview {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.canvas = ctx.canvas;
    this.board = this.game.board;
  }

  start() {
    // this.game.draw(this.ctx);
    this.canvas.addEventListener("click", this.game.fireSmoot);
    requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    this.game.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }
}

export default Gameview;
