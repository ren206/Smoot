import Settings from './settings';
import Cannon from './cannon';
import Board from './board';
import Smoot from './smoot';

class Game {
  constructor() {
    this.board = this.newBoard();
    this.cannon = this.newCannon();
    this.loadedSmoot = this.randomSmoot();
  }

  allObjects() {
    return [
      this.board,
      this.cannon,
      this.loadedSmoot
    ]
  }

  checkState() {
    if (this.loadedSmoot.collidedWithTop()) {
      this.hangSmoot(this.loadedSmoot);
      this.reset();
    }
  }

  draw(ctx) {
    this.allObjects().forEach( (object) => {
      object.draw(ctx);
    });
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
        centerX: Settings.WIDTH / 2,
        centerY: Settings.HEIGHT + 2
      }
    });
  }

  reset() {
    this.loadedSmoot.vel = {
      velX: 0,
      velY: 0
    }

    this.loadedSmoot = this.randomSmoot();
  }

  step() {
    this.loadedSmoot.move();
    this.checkState();
  }
}

export default Game;
