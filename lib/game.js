import Cannon from './cannon';
import Board from './board';
import Smoot from './smoot';

class Game {
  constructor() {
    this.board = this.newBoard();
    this.cannon = this.newCannon();
    this.smoots = [];
  }

  allObjects() {
    return [
      this.board,
      this.cannon,
      this.smoots
    ]
  }

  draw(ctx) {
    ctx.clearRect(0,0, Game.WIDTH, Game.HEIGHT);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.WIDTH, Game.HEIGHT);

    this.allObjects.forEach( (object) => {
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

Game.WIDTH = 700;
Game.HEIGHT = 500;
Game.BG_COLOR = "#000000";

export default Game;
