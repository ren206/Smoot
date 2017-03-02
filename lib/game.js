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
      this.cannon,
      this.board,
      this.hangingSmoots,
      this.loadedSmoot
    ]
  }

  draw(ctx) {
    ctx.clearRect(0,0, Game.WIDTH, Game.HEIGHT);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.WIDTH, Game.HEIGHT);
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
      centerY: Game.HEIGHT - 25
    });
  }

  randomSmoot(pos) {
    return new Smoot({
      color: Smoot.COLORS[Math.floor(Math.random() * Smoot.COLORS.length)],
      radius: 25,
      pos: pos
    });
  }

  newBoard() {
    return new Board();
  }

  newCannon() {
    return new Cannon();
  }

  populateSmoots() {
    // fill the grid of smoots on the ceiling
  }
}

Game.WIDTH = 500;
Game.HEIGHT = 700;
Game.BG_COLOR = "#000000";

export default Game;
