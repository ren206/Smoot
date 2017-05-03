import Settings from './settings';
import Cannon from './cannon';
import Board from './board';
import Smoot from './smoot';

class Game {
  constructor() {
    this.board = this.newBoard();
    this.smoot = this.loadRandomSmoot();
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
          if (this.smoot.isCollidedWithTop() || this.smoot.isCollidedWith(hangingObject)) {
            this.hangSmoot();
            if (this.hasReachedBottom()) {
              this.loseGame();
              return;
            }
            this.handleMatches();
            this.reload();
            if (this.board.isEmpty()) this.winGame();
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

  drop(objectsToDrop) {
    this.board.drop(objectsToDrop);
  }

  getRandomColor() {
    const numColors = Settings.SMOOT.NUM_COLORS;
    return Settings.SMOOT.COLORS[Math.floor(Math.random() * numColors)];
  }


  handleMatches() {
    const matches = this.board.findNeighboringSmootMatches(this.smoot);
    if (matches.length > 2) {
    this.drop(matches);
    this.resetChecks();

    // const floatingGroups = this.board.findFloatingGroups();
    // if (floatingGroups.length > 0) floatingGroups.forEach(floater => this.drop(floater));
  }
    this.resetChecks();
  }

  hangSmoot() {
    this.board.addToGrid(this.smoot);
  }

  hasReachedBottom() {
    return this.board.hasReachedBottom();
  }

  loadRandomSmoot() {
    let color = this.getRandomColor();
    const remainingColors = this.board.getRemainingColors();
    if (remainingColors.length > 0) {
      color = remainingColors[Math.floor(Math.random() * remainingColors.length)];
    }
    return new Smoot({
      centerPos: [
        Settings.BOARD.WIDTH / 2,
        Settings.BOARD.HEIGHT + 2
      ],
      color: color,
    });
  }

  loseGame() {
    this.hasEnded = "lost";
    this.board.changeColors();
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

  reload() {
    this.smoot = this.loadRandomSmoot();
  }

  reset() {
    this.board = this.newBoard();
    this.smoot = this.loadRandomSmoot();
    this.cannon = this.newCannon();
    this.hasEnded = "";
  }

  resetChecks() {
    this.board.resetChecks();
  }

  step() {
    this.smoot.move();
    this.checkState();
  }

  winGame() {
    this.hasEnded = "won";
  }
}


export default Game;
