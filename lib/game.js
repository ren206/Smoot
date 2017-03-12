import Settings from './settings';
import Cannon from './cannon';
import Board from './board';
import Smoot from './smoot';

class Game {
  constructor() {
    this.board = this.newBoard();
    this.smoot = this.generateRandomSmoot();
    this.cannon = this.newCannon();
    this.hasEnded = "";
  }

  allObjects() {
    return [
      this.board,
      this.cannon,
      this.smoot
    ]
  }

  checkState() {
    let hangingObject;
    for (let rowIdx = 0; rowIdx < Settings.BOARD.ROW_COUNT; rowIdx++) {
      for (let slotIdx = 0; slotIdx < Settings.BOARD.ROW_SIZE; slotIdx++) {
        hangingObject = this.board.grid[rowIdx][slotIdx];
        if (hangingObject instanceof Smoot) {
          if (this.smoot.collidedWithTop() || this.smoot.collidedWith(hangingObject)) {
            this.hangSmoot();
            if (this.hasReachedBottom()) this.endGame();
            this.handleMatches();
            this.reload();
          }
        }
      }
    }
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Settings.BOARD.WIDTH, Settings.BOARD.HEIGHT);
    this.allObjects().forEach( (object) => {
      object.draw(ctx);
    });

    // this.drawSmootPos(ctx);
  }

  drawSmootPos(ctx) {
    ctx.fillStyle = "white";
    ctx.font = '24px serif';
    ctx.fillText(`smootX: ${this.smoot.centerPos[0].toFixed(1)}, smootY: ${this.smoot.centerPos[1].toFixed(1)}`, 20, 50);
  }

  dropMatches(matches) {
    this.board.drop(matches);
  }

  endGame() {
    this.hasEnded = "loss";
  }

  handleMatches() {
    const matches = this.board.findNeighboringSmootMatches(this.smoot);
    // findChainingSmootMatches(this.smoot);

    // console.log(matches);

    if (matches.length > 2) {
      this.dropMatches(matches);
    }
  }

  hangSmoot() {
    this.board.addToGrid(this.smoot);
  }

  hasReachedBottom() {
    return this.board.hasReachedBottom();
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

  reload() {
    // this.smoot.vel = [0, 0];
    this.board.resetChecks();
    this.smoot = this.generateRandomSmoot();
  }

  reset() {
    this.board = this.newBoard();
    this.smoot = this.generateRandomSmoot();
    this.cannon = this.newCannon();
    this.hasEnded = "";
  }

  step() {
    this.smoot.move();
    this.checkState();
  }
}

export default Game;
