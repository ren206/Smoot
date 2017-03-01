class Gameview {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.canvas = ctx.canvas;
    this.board = this.game.board;
  }

  start() {
    this.game.draw(this.ctx);
  }
}

export default Gameview;
