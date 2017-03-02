import Cannon from './cannon';
import Board from './board';
import Smoot from './smoot';

class Game {
  constructor() {
    this.board = this.newBoard();
    this.cannon = this.newCannon();
  }

  allObjects() {
    return [
      this.cannon,
      this.board
    ]
  }

  draw(ctx) {
    ctx.clearRect(0,0, Game.WIDTH, Game.HEIGHT);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.WIDTH, Game.HEIGHT);
    this.allObjects().forEach( (object) => {
      object.draw(ctx);
    });
  }
  newBoard() {
    return new Board();
  }

  newCannon() {
    return new Cannon();
  }
}

Game.WIDTH = 500;
Game.HEIGHT = 700;
Game.BG_COLOR = "#000000";

export default Game;
