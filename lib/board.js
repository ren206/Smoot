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

  draw(ctx) {
    this.drawGrid(ctx);
    this.drawSmoots(ctx);
  }

  drawGrid(ctx) {
    ctx.clearRect(0,0, Settings.WIDTH, Settings.HEIGHT);
    ctx.fillStyle = Settings.BG_COLOR;
    ctx.fillRect(0, 0, Settings.WIDTH, Settings.HEIGHT);
  }

  drawSmoots(ctx) {
    this.smoots.forEach( (smoot) => {
      smoot.draw(ctx);
    })
  }

}

export default Board;
