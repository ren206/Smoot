import Smoot from './smoot';
import * as MyCanvas from './my_canvas';
import Settings from './settings';


class Board {
  constructor(game) {
    this.game = game;
    this.canvasElement = MyCanvas.getElement();
    this.canvasBorders = MyCanvas.getBorders();
    this.smoots = [];
  }

  addSmoot(smoot) {
    this.smoots.push(smoot);
  }

  createGrid() {
    // staggered each row

  }

  draw(ctx) {
    this.drawBackground(ctx);
    this.drawSmoots(ctx);
  }

  drawBackground(ctx) {
    ctx.clearRect(0,0, Settings.BOARD.WIDTH, Settings.BOARD.HEIGHT);
    ctx.fillStyle = Settings.BOARD.BG_COLOR;
    ctx.fillRect(0, 0, Settings.BOARD.WIDTH, Settings.BOARD.HEIGHT);
  }

  drawSmoots(ctx) {
    this.smoots.forEach( (smoot) => {
      smoot.draw(ctx);
    })
  }

}

export default Board;
