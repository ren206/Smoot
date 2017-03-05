import Settings from './settings';
import Cannon from './cannon';
import Board from './board';
import Smoot from './smoot';

class Game {
  constructor() {
    this.board = this.newBoard();
    this.cannon = this.newCannon();
    this.smoot = this.generateRandomSmoot();
  }

  allObjects() {
    return [
      this.board,
      this.cannon,
      this.smoot
    ]
  }

  checkState() {
    let hangingSmoot;
    for (let rowIdx = 0; rowIdx < Settings.BOARD.FILLED_ROW_COUNT; rowIdx++) {
      for (let slotIdx = 0; slotIdx < Settings.BOARD.ROW_SIZE; slotIdx++) {
        hangingSmoot = this.board.grid[rowIdx][slotIdx];
        if (this.smoot.collidedWithTop() || this.smoot.collidedWith(hangingSmoot)) {
          this.hangSmoot(this.smoot);
          this.reset();
      }
    }
    }
  }

  draw(ctx) {
    this.allObjects().forEach( (object) => {
      object.draw(ctx);
    });

    this.drawSmootPos(ctx);
  }

  drawSmootPos(ctx) {
    ctx.fillStyle = "white";
    ctx.font = '24px serif';
    ctx.fillText(`smootX: ${this.smoot.centerPos[0].toFixed(1)}, smootY: ${this.smoot.centerPos[1].toFixed(1)}`, 20, 50);
  }

  hangSmoot(smoot) {
    this.board.addToGrid(smoot);
  }

  newBoard() {
    return new Board(this);
  }

  newCannon() {
    return new Cannon(this);
  }

  populateGrid() {
    this.board.createGrid();
  }

  generateRandomSmoot() {
    return new Smoot({
      centerPos: [
        Settings.BOARD.WIDTH / 2,
        Settings.BOARD.HEIGHT + 2
      ]
    });
  }

  reset() {
    this.smoot.vel = [0, 0];

    this.smoot = this.generateRandomSmoot();
  }

  step() {
    this.smoot.move();
    this.checkState();
  }
}

export default Game;
