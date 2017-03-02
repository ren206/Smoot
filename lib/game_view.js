class Gameview {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.canvas = ctx.canvas;
    this.board = this.game.board;
  }

  start() {
    requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    this.game.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }
}

export default Gameview;
