import Smoot from './smoot';
import SmootSpace from './smoot_space';
import Settings from './settings';
import * as Utils from './utils';


class Board {
  constructor(game) {
    this.game = game;
    this.grid = [];
  }

  addToGrid(smoot) {
    let closestPos, gridPos;
    [closestPos, gridPos] = this.findClosestPosAndGridPos(smoot);

    smoot.stop();
    [smoot.centerPos, smoot.gridPos] = [closestPos, gridPos];
    this.grid[gridPos[0]][gridPos[1]] = smoot;
  }

  createGrid() {
    const radius = Settings.SMOOT.RADIUS;
    const diameter = radius * 2;
    const offset = Settings.BOARD.OFFSET;
    let rowPos = [radius, radius];
    // don't need incremental variable because rowPos is not being assigned anywhere
    for (let rowIdx = 0; rowIdx < Settings.BOARD.ROW_COUNT; rowIdx++) {
      let row = [];

      let slotPos = rowPos.slice();
      for (let slotIdx = 0; slotIdx < Settings.BOARD.ROW_SIZE; slotIdx++) {
        let newSmoot;
        // stagger the start positions of each row
        if (slotIdx === 0) {
          slotPos[0] = (rowIdx % 2 ? radius + offset : diameter + offset);

          if (rowIdx < Settings.BOARD.FILLED_ROW_COUNT) {
            newSmoot = new Smoot({
              // needs another copy for each slot
              centerPos: slotPos.slice(),
              gridPos: [rowIdx, slotIdx]
            });
          } else {
            newSmoot = new SmootSpace({
              centerPos: slotPos.slice(),
              gridPos: [rowIdx, slotIdx]
            });
          }

          // only the first in the row
          row.push(newSmoot);
          continue;
        }

        // increment slotPos
        slotPos[0] += diameter;
        if (rowIdx < Settings.BOARD.FILLED_ROW_COUNT) {
          newSmoot = new Smoot({
            // needs another copy for each slot
            centerPos: slotPos.slice(),
            gridPos: [rowIdx, slotIdx]
          });
        } else {
          newSmoot = new SmootSpace({
            centerPos: slotPos.slice(),
            gridPos: [rowIdx, slotIdx]
          });
        }

        row.push(newSmoot);
      }

      this.grid.push(row);
      const gapCloser = radius / 14;
      rowPos[1] += (diameter - gapCloser);
    }
  }

  draw(ctx) {
    this.drawBackgroundNonTrailing(ctx);
    // this.drawBackgroundTrailing(ctx);
    this.drawGrid(ctx);
    this.drawBottomLine(ctx);
  }

  drawBackgroundNonTrailing(ctx) {
    ctx.clearRect(0,0, Settings.BOARD.WIDTH, Settings.BOARD.HEIGHT);
    ctx.fillStyle = Settings.BOARD.BG_COLOR;
    ctx.fillRect(0, 0, Settings.BOARD.WIDTH, Settings.BOARD.HEIGHT);
  }

  drawBackgroundTrailing(ctx) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillRect(0, 0, Settings.BOARD.WIDTH, Settings.BOARD.HEIGHT);
  }

  drawBottomLine(ctx) {
    ctx.strokeStyle = Settings.BOTTOM_LINE.COLOR;
    ctx.beginPath();
    const lineHeight = Settings.BOARD.HEIGHT - Settings.CANNON.RADIUS;
    ctx.moveTo(0, lineHeight);
    ctx.lineTo(Settings.BOARD.WIDTH, lineHeight);
    ctx.stroke();
  }

  drawGrid(ctx) {
    this.grid.forEach(row => {
      row.forEach(smoot => {
        smoot.draw(ctx);
      });
    });
  }

  drop(matches) {
    let matchedSmoot;
    let centerPos;
    matches.forEach((pos) => {
      matchedSmoot = this.grid[pos[0]][pos[1]];
      centerPos = matchedSmoot.centerPos;
      this.grid[pos[0]][pos[1]] = new SmootSpace({
        gridPos: [pos[0], pos[1]],
        centerPos
      });
    })
  }

  findClosestPosAndGridPos(smoot) {
    let closestPos;
    let gridPos = [];

    for (let rowIdx = 0; rowIdx < Settings.BOARD.ROW_COUNT; rowIdx++) {
      for (let slotIdx = 0; slotIdx < Settings.BOARD.ROW_SIZE; slotIdx++) {
        let hangingObject = this.grid[rowIdx][slotIdx];
        let newDistance = Utils.getDistanceBetween2(smoot.centerPos, hangingObject.centerPos);

        if (hangingObject instanceof SmootSpace && newDistance < Settings.SMOOT.RADIUS * 2) {
          // assign shortest distance
          if (!closestPos || newDistance < Utils.getDistanceBetween2(smoot.centerPos, closestPos)) {
            closestPos = hangingObject.centerPos;
            gridPos = [rowIdx, slotIdx];
          }
        }
      }
    }

    return [closestPos, gridPos];
  }

  findNeighboringSmootMatches(smoot) {
    // let matchingSmoots = [];
    const smootGridPos = smoot.gridPos;
    let matchingPositions = [smootGridPos];
    const neighborGridPositions = this.getNeighborGridPositions(smootGridPos);

    // ensure the neighbors are Smoots
    const smootNeighborPositions = neighborGridPositions.filter((pos) => (this.grid[pos[0]][pos[1]] instanceof Smoot));

    // filter for neighbor smoots
    smootNeighborPositions.forEach((smootNeighborPos) => {
      let neighborSmoot = this.grid[smootNeighborPos[0]][smootNeighborPos[1]];

      // check for matches
      if (!neighborSmoot.isChecked && smoot.matchesWith(neighborSmoot)) {

        // let matchingNeighborPositions = this.findNeighboringSmootMatches(neighborSmoot);

        if (!matchingPositions.includes(smootNeighborPos)) matchingPositions.push(smootNeighborPos);
        // matchingPositions.concat(matchingNeighborPositions);
        // debugger
      }
    });

    // return an array of matchingPositions
    // console.log(matchingPositions);
    return matchingPositions;
  }

  getNeighborGridPositions(gridPos) {
    // gridPos: [rowIdx, slotIdx]

    let positions = [];

    // first row leans right
    const leaningLeft = Boolean(gridPos[0] % 2);

    const gridDirections = leaningLeft ? Settings.BOARD.GRID_DIRECTIONS_LEFT : Settings.BOARD.GRID_DIRECTIONS_RIGHT;

    let neighborPos;
    gridDirections.forEach((direction) => {
      neighborPos = [gridPos[0] + direction[0], gridPos[1] + direction[1]];
      if (neighborPos[0] >= 0 && neighborPos[0] < Settings.BOARD.ROW_COUNT && neighborPos[1] >= 0 && neighborPos[1] < Settings.BOARD.ROW_SIZE) {
        positions.push(neighborPos);
      }
    });

    return positions;
  }

  hasReachedBottom() {
    return this.game.smoot.gridPos[0] === this.grid.length - 1;
  }

  resetChecks() {
    this.grid.forEach((row) => {
      row.forEach((hangingObject) => {
        if (hangingObject instanceof Smoot) {
          hangingObject.resetCheck();
        }
      })
    })
  }
}

export default Board;
