import Cannon from './cannon';
import Board from './board';
import Smoot from './smoot';

class Game {
  constructor() {
    this.cannon = new Cannon();
    this.board = new Board();
    this.smoots = [];
  }
}

export default Game;
