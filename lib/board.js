import Smoot from './smoot';
import SmootSpace from './smoot_space';
import * as MyCanvas from './my_canvas';
import Settings from './settings';
import * as Utils from './utils';


class Board {
  constructor(game) {
    this.game = game;
    this.canvasElement = MyCanvas.getElement();
    this.canvasBorders = MyCanvas.getBorders();
    this.grid = [];
  }

  addToGrid(smoot) {
    let closestPos, gridPos;
    [closestPos, gridPos] = this.findClosestPosAndGridPos(smoot);

    [smoot.centerPos, smoot.gridPos] = [closestPos, gridPos];
    this.grid[gridPos[0]][gridPos[1]] = smoot;
    smoot.stop();
  }

  createGrid() {
    const radius = Settings.SMOOT.RADIUS;
    const diameter = radius * 2;
    const offset = Settings.BOARD.OFFSET;
    let rowPos = [radius, radius + offset];
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
      rowPos[1] += diameter;
    }
  }

  draw(ctx) {
    this.drawBackground(ctx);
    this.drawGrid(ctx);
  }

  drawBackground(ctx) {
    ctx.clearRect(0,0, Settings.BOARD.WIDTH, Settings.BOARD.HEIGHT);
    ctx.fillStyle = Settings.BOARD.BG_COLOR;
    ctx.fillRect(0, 0, Settings.BOARD.WIDTH, Settings.BOARD.HEIGHT);
  }

  drawGrid(ctx) {
    this.grid.forEach(row => {
      row.forEach(smoot => {
        smoot.draw(ctx);
      });
    });
  }

  findClosestPosAndGridPos(smoot) {
    let closestPos;
    let gridPos = [];

    for (let rowIdx = 0; rowIdx < Settings.BOARD.ROW_COUNT; rowIdx++) {
      for (let slotIdx = 0; slotIdx < Settings.BOARD.ROW_SIZE; slotIdx++) {
        let smootPlaceholder = this.grid[rowIdx][slotIdx];
        let newDistance = Utils.getDistanceBetween2(smoot.centerPos, smootPlaceholder.centerPos);

        if (smootPlaceholder instanceof SmootSpace && newDistance < Settings.SMOOT.RADIUS * 2) {
          // assign shortest distance
          if (!closestPos || newDistance < Utils.getDistanceBetween2(smoot.centerPos, closestPos)) {
            closestPos = smootPlaceholder.centerPos;
            gridPos = [rowIdx, slotIdx];
          }
        }
      }
    }

    return [closestPos, gridPos];
  }

  findSmootMatches(smoot) {
    const smootGridPos = smoot.gridPos();
    // const neighborGridPositions = this.getNeighborGridPositions(smootGridPos);
    // go through neighbors recursively(?)
    // return an array of matches
  }

  getNeighborGridPositions(pos) {
    // pos: [rowIdx, slotIdx]
    // return an array
    let positions = [];


  }
}

export default Board;
