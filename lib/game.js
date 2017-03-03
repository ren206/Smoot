import Cannon from './cannon';
import Board from './board';
import Smoot from './smoot';

class Game {
  constructor() {
    this.board = this.newBoard();
    this.cannon = this.newCannon();
    this.hangingSmoots = [];
    this.loadedSmoot = this.generateLoadedSmoot();
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

  generateLoadedSmoot() {
    return this.randomSmoot({
      centerX: Game.WIDTH / 2,
      centerY: Game.HEIGHT + 2
    });
  }

  randomSmoot(pos) {
    return new Smoot({
      color: Smoot.COLORS[Math.floor(Math.random() * Smoot.COLORS.length)],
      radius: 25,
      pos,
      vel: {
        velX: 0,
        velY: 0
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
}

Game.WIDTH = 500;
Game.HEIGHT = 700;
Game.BG_COLOR = "#000000";

export default Game;
