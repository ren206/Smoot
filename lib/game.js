import Cannon from './cannon';
import Board from './board';
import Smoot from './smoot';

class Game {
  constructor() {
    this.board = this.newBoard();
    this.cannon = this.newCannon();
    this.hangingSmoots = [];
    this.loadedSmoot = this.randomSmoot();
  }

  allObjects() {
    return [
      this.board,
      this.cannon,
      this.hangingSmoots,
      this.loadedSmoot
    ]
  }

  draw(ctx) {
    this.allObjects().forEach( (object) => {
      if (object instanceof Array) {
        object.forEach( (smoot) => {
          smoot.draw(ctx);
        });
      } else {
        object.draw(ctx);
      }
    });
  }

  checkState() {
    if (this.loadedSmoot.collidedWithTop()) {
      this.reset();
    }
  }

  randomSmoot() {
    return new Smoot({
      pos: {
        centerX: Game.WIDTH / 2,
        centerY: Game.HEIGHT + 2
      }
    });
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

Game.WIDTH = 500;
Game.HEIGHT = 700;
Game.BG_COLOR = "#000000";

export default Game;
