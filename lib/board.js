import Smoot from './smoot';
import * as MyCanvas from './my_canvas';

class Board {
  constructor(game) {
    this.game = game;
    this.canvasElement = MyCanvas.getElement();
    this.canvasBorders = MyCanvas.getBorders();
  }

  draw(ctx) {
    ctx.clearRect(0,0, this.game.constructor.WIDTH, this.game.constructor.HEIGHT);
    ctx.fillStyle = this.game.constructor.BG_COLOR;
    ctx.fillRect(0, 0, this.game.constructor.WIDTH, this.game.constructor.HEIGHT);
  }

}

export default Board;
