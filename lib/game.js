import Settings from './settings';
import Cannon from './cannon';
import Board from './board';
import Smoot from './smoot';

class Game {
  constructor() {
    this.board = this.newBoard();
    this.cannon = this.newCannon();
    this.smoot = this.randomSmoot();
  }

  allObjects() {
    return [
      this.board,
      this.cannon,
      this.smoot
    ]
  }

  checkState() {
    if (this.smoot.collidedWithTop()) {
      this.hangSmoot(this.smoot);
      this.reset();
    }
  }

  draw(ctx) {
    this.allObjects().forEach( (object) => {
      object.draw(ctx);
    });

    this.drawSmootPos(ctx);
  }

  drawSmootPos(ctx) {
    ctx.fillStyle = "gray";
    ctx.font = '24px serif';
    ctx.fillText(`smootX: ${this.smoot.pos.centerX.toFixed(1)}, smootY: ${this.smoot.pos.centerY.toFixed(1)}`, 20, 50);
  }

  hangSmoot(smoot) {
    this.board.addSmoot(smoot);
  }

  newBoard() {
    return new Board(this);
  }

  newCannon() {
    return new Cannon(this);
  }

  populateSmoots() {
    // fill the grid of smoots on the ceiling
  }

  randomSmoot() {
    return new Smoot({
      pos: {
        centerX: Settings.BOARD.WIDTH / 2,
        centerY: Settings.BOARD.HEIGHT + 2
      }
    });
  }

  reset() {
    this.smoot.vel = {
      velX: 0,
      velY: 0
    }

    this.smoot = this.randomSmoot();
  }

  step() {
    this.smoot.move();
    this.checkState();
  }
}

export default Game;
