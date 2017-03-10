/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  // Board settings
  BOARD: {
    WIDTH: 700,
    HEIGHT: 700,
    BG_COLOR: 'black',
    ROW_SIZE: 13,
    ROW_COUNT: 14,
    FILLED_ROW_COUNT: 6,
    OFFSET: 12,
    GRID_DIRECTIONS_LEFT: [[-1, -1], [-1, 0], [0, -1], [0, 1], [1, -1], [1, 0]],
    GRID_DIRECTIONS_RIGHT: [[-1, 0], [-1, 1], [0, -1], [0, 1], [1, 0], [1, 1]]
  },

  // Bottom line settings
  BOTTOM_LINE: {
    COLOR: "pink"
  },

  // Cannon settings
  CANNON: {
    FIREPOWER: 15,
    RADIUS: 30
  },

  // Smoot settings
  SMOOT: {
    RADIUS: 25,
    NUM_COLORS: 6,
    COLORS: ["red", "green", "blue", "orange", "purple", "silver"]
  },

  SMOOT_SPACE: {
    COLOR: "gray"
  }

};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getElement = exports.getElement = function getElement() {
  return document.getElementsByTagName("canvas")[0];
};

// const element = document.getElementsByTagName("canvas")[0];

var getBorders = exports.getBorders = function getBorders() {
  var clientRect = getElement().getBoundingClientRect();
  return {
    left: clientRect.left,
    right: clientRect.right,
    top: clientRect.top,
    bottom: clientRect.bottom
  };
};

var getTopBorder = exports.getTopBorder = function getTopBorder() {
  return getBorders().top;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import * as MyCanvas from './my_canvas';


var _settings = __webpack_require__(0);

var _settings2 = _interopRequireDefault(_settings);

var _utils = __webpack_require__(3);

var Utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Smoot = function () {
  function Smoot(options) {
    _classCallCheck(this, Smoot);

    // this.canvasElement = MyCanvas.getElement();
    // this.canvasBorders = MyCanvas.getBorders();
    this.color = options.color || this.getRandomColor();
    this.centerPos = options.centerPos;
    this.gridPos = options.gridPos;
    this.radius = options.radius || _settings2.default.SMOOT.RADIUS;
    this.vel = options.vel || [0, 0];

    this.happy = Math.random() < 0.5 ? true : false;
  }

  _createClass(Smoot, [{
    key: 'collidedWith',
    value: function collidedWith(anotherSmoot) {
      var distBetweenCenters = Utils.getDistanceBetween2(this.centerPos, anotherSmoot.centerPos);
      return distBetweenCenters <= this.radius * 2;
      // return false;
    }
  }, {
    key: 'collidedWithTop',
    value: function collidedWithTop() {
      return this.centerPos[1] <= this.radius;
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      this.drawCircle(ctx);
      this.drawFace(ctx);
    }
  }, {
    key: 'drawCircle',
    value: function drawCircle(ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.centerPos[0], this.centerPos[1], this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }, {
    key: 'drawFace',
    value: function drawFace(ctx) {
      // left eye
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(this.centerPos[0] - this.radius / 2, this.centerPos[1] - this.radius / 2, 4, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();

      // right eye
      ctx.beginPath();
      ctx.arc(this.centerPos[0] + this.radius / 2, this.centerPos[1] - this.radius / 2, 4, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();

      // nose

      ctx.beginPath();

      ctx.arc(this.centerPos[0], this.centerPos[1], 4, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();

      // mouth
      var mouthStart = void 0,
          mouthEnd = void 0,
          centerOffset = void 0;

      var _ref = this.happy ? [0, Math.PI, this.radius / 4] : [Math.PI, 0, this.radius / 1.25];

      var _ref2 = _slicedToArray(_ref, 3);

      mouthStart = _ref2[0];
      mouthEnd = _ref2[1];
      centerOffset = _ref2[2];

      ctx.beginPath();
      ctx.arc(this.centerPos[0], this.centerPos[1] + centerOffset, this.radius / 2, mouthStart, mouthEnd);
      ctx.closePath();
      ctx.lineWidth = 2;
      ctx.fillStyle = "black", ctx.fill();
    }
  }, {
    key: 'getRandomColor',
    value: function getRandomColor() {
      var numColors = _settings2.default.SMOOT.NUM_COLORS;
      return _settings2.default.SMOOT.COLORS[Math.floor(Math.random() * numColors)];
    }
  }, {
    key: 'matchesWith',
    value: function matchesWith(smoot) {
      this.isChecked = true;
      smoot.isChecked = true;
      return this.color === smoot.color;
    }
  }, {
    key: 'move',
    value: function move() {
      if (this.centerPos[0] + this.radius >= _settings2.default.BOARD.WIDTH || this.centerPos[0] <= this.radius) {
        this.vel[0] = -this.vel[0];
      }

      this.centerPos[0] += this.vel[0];
      this.centerPos[1] += this.vel[1];
    }
  }, {
    key: 'resetCheck',
    value: function resetCheck() {
      this.isChecked = false;
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.vel = [0, 0];
    }
  }]);

  return Smoot;
}();

exports.default = Smoot;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getDistanceBetween2 = exports.getDistanceBetween2 = function getDistanceBetween2(pos1, pos2) {
  return Math.sqrt(Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2));
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

var _settings2 = _interopRequireDefault(_settings);

var _cannon = __webpack_require__(7);

var _cannon2 = _interopRequireDefault(_cannon);

var _board = __webpack_require__(6);

var _board2 = _interopRequireDefault(_board);

var _smoot = __webpack_require__(2);

var _smoot2 = _interopRequireDefault(_smoot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.board = this.newBoard();
    this.smoot = this.generateRandomSmoot();
    this.cannon = this.newCannon();
  }

  _createClass(Game, [{
    key: 'allObjects',
    value: function allObjects() {
      return [this.board, this.cannon, this.smoot];
    }
  }, {
    key: 'checkState',
    value: function checkState() {
      var hangingObject = void 0;
      for (var rowIdx = 0; rowIdx < _settings2.default.BOARD.ROW_COUNT; rowIdx++) {
        for (var slotIdx = 0; slotIdx < _settings2.default.BOARD.ROW_SIZE; slotIdx++) {
          hangingObject = this.board.grid[rowIdx][slotIdx];
          if (hangingObject instanceof _smoot2.default) {
            if (this.smoot.collidedWithTop() || this.smoot.collidedWith(hangingObject)) {
              this.hangSmoot();
              this.handleMatches();
              this.reset();
            }
          }
        }
      }
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      this.allObjects().forEach(function (object) {
        object.draw(ctx);
      });

      // this.drawSmootPos(ctx);
    }
  }, {
    key: 'drawSmootPos',
    value: function drawSmootPos(ctx) {
      ctx.fillStyle = "white";
      ctx.font = '24px serif';
      ctx.fillText('smootX: ' + this.smoot.centerPos[0].toFixed(1) + ', smootY: ' + this.smoot.centerPos[1].toFixed(1), 20, 50);
    }
  }, {
    key: 'dropMatches',
    value: function dropMatches(matches) {
      this.board.drop(matches);
    }
  }, {
    key: 'handleMatches',
    value: function handleMatches() {
      var matches = this.board.findNeighboringSmootMatches(this.smoot);
      // findChainingSmootMatches(this.smoot);

      // console.log(matches);

      if (matches.length > 2) {
        this.dropMatches(matches);
      }
    }
  }, {
    key: 'hangSmoot',
    value: function hangSmoot() {
      this.board.addToGrid(this.smoot);
    }
  }, {
    key: 'newBoard',
    value: function newBoard() {
      return new _board2.default(this);
    }
  }, {
    key: 'newCannon',
    value: function newCannon() {
      return new _cannon2.default(this);
    }
  }, {
    key: 'populateGrid',
    value: function populateGrid() {
      this.board.createGrid();
    }
  }, {
    key: 'generateRandomSmoot',
    value: function generateRandomSmoot() {
      return new _smoot2.default({
        centerPos: [_settings2.default.BOARD.WIDTH / 2, _settings2.default.BOARD.HEIGHT + 2]
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      // this.smoot.vel = [0, 0];
      this.board.resetChecks();
      this.smoot = this.generateRandomSmoot();
    }
  }, {
    key: 'step',
    value: function step() {
      this.smoot.move();
      this.checkState();
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameView = function () {
  function GameView(game, ctx) {
    _classCallCheck(this, GameView);

    this.game = game;
    this.ctx = ctx;
    this.canvas = ctx.canvas;
  }

  _createClass(GameView, [{
    key: "start",
    value: function start() {
      this.game.populateGrid();
      this.canvas.addEventListener("mousemove", this.game.cannon.getMousePosition, false);
      // this.canvas.addEventListener("click", this.game.cannon.logMousePosition, false);
      this.canvas.addEventListener("click", this.game.cannon.fireSmoot);
      requestAnimationFrame(this.animate.bind(this));
    }
  }, {
    key: "animate",
    value: function animate() {
      this.game.step();
      this.game.draw(this.ctx);
      requestAnimationFrame(this.animate.bind(this));
    }
  }]);

  return GameView;
}();

exports.default = GameView;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// import * as MyCanvas from './my_canvas';


var _smoot = __webpack_require__(2);

var _smoot2 = _interopRequireDefault(_smoot);

var _smoot_space = __webpack_require__(8);

var _smoot_space2 = _interopRequireDefault(_smoot_space);

var _settings = __webpack_require__(0);

var _settings2 = _interopRequireDefault(_settings);

var _utils = __webpack_require__(3);

var Utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = function () {
  function Board(game) {
    _classCallCheck(this, Board);

    this.game = game;
    // this.canvasElement = MyCanvas.getElement();
    // this.canvasBorders = MyCanvas.getBorders();
    this.grid = [];
  }

  _createClass(Board, [{
    key: 'addToGrid',
    value: function addToGrid(smoot) {
      var closestPos = void 0,
          gridPos = void 0;

      var _findClosestPosAndGri = this.findClosestPosAndGridPos(smoot);

      var _findClosestPosAndGri2 = _slicedToArray(_findClosestPosAndGri, 2);

      closestPos = _findClosestPosAndGri2[0];
      gridPos = _findClosestPosAndGri2[1];


      smoot.stop();
      var _ref = [closestPos, gridPos];
      smoot.centerPos = _ref[0];
      smoot.gridPos = _ref[1];

      this.grid[gridPos[0]][gridPos[1]] = smoot;
    }
  }, {
    key: 'createGrid',
    value: function createGrid() {
      var radius = _settings2.default.SMOOT.RADIUS;
      var diameter = radius * 2;
      var offset = _settings2.default.BOARD.OFFSET;
      var rowPos = [radius, radius];
      // don't need incremental variable because rowPos is not being assigned anywhere
      for (var rowIdx = 0; rowIdx < _settings2.default.BOARD.ROW_COUNT; rowIdx++) {
        var row = [];

        var slotPos = rowPos.slice();
        for (var slotIdx = 0; slotIdx < _settings2.default.BOARD.ROW_SIZE; slotIdx++) {
          var newSmoot = void 0;
          // stagger the start positions of each row
          if (slotIdx === 0) {
            slotPos[0] = rowIdx % 2 ? radius + offset : diameter + offset;

            if (rowIdx < _settings2.default.BOARD.FILLED_ROW_COUNT) {
              newSmoot = new _smoot2.default({
                // needs another copy for each slot
                centerPos: slotPos.slice(),
                gridPos: [rowIdx, slotIdx]
              });
            } else {
              newSmoot = new _smoot_space2.default({
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
          if (rowIdx < _settings2.default.BOARD.FILLED_ROW_COUNT) {
            newSmoot = new _smoot2.default({
              // needs another copy for each slot
              centerPos: slotPos.slice(),
              gridPos: [rowIdx, slotIdx]
            });
          } else {
            newSmoot = new _smoot_space2.default({
              centerPos: slotPos.slice(),
              gridPos: [rowIdx, slotIdx]
            });
          }

          row.push(newSmoot);
        }

        this.grid.push(row);
        var gapCloser = radius / 12;
        rowPos[1] += diameter - gapCloser;
      }
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      this.drawBackgroundNonTrailing(ctx);
      // this.drawBackgroundTrailing(ctx);
      this.drawGrid(ctx);
      this.drawBottomLine(ctx);
    }
  }, {
    key: 'drawBackgroundNonTrailing',
    value: function drawBackgroundNonTrailing(ctx) {
      ctx.clearRect(0, 0, _settings2.default.BOARD.WIDTH, _settings2.default.BOARD.HEIGHT);
      ctx.fillStyle = _settings2.default.BOARD.BG_COLOR;
      ctx.fillRect(0, 0, _settings2.default.BOARD.WIDTH, _settings2.default.BOARD.HEIGHT);
    }
  }, {
    key: 'drawBackgroundTrailing',
    value: function drawBackgroundTrailing(ctx) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.fillRect(0, 0, _settings2.default.BOARD.WIDTH, _settings2.default.BOARD.HEIGHT);
    }
  }, {
    key: 'drawBottomLine',
    value: function drawBottomLine(ctx) {
      ctx.strokeStyle = _settings2.default.BOTTOM_LINE.COLOR;
      ctx.beginPath();
      var lineHeight = _settings2.default.BOARD.HEIGHT - _settings2.default.CANNON.RADIUS;
      ctx.moveTo(0, lineHeight);
      ctx.lineTo(_settings2.default.BOARD.WIDTH, lineHeight);
      ctx.stroke();
    }
  }, {
    key: 'drawGrid',
    value: function drawGrid(ctx) {
      this.grid.forEach(function (row) {
        row.forEach(function (smoot) {
          smoot.draw(ctx);
        });
      });
    }
  }, {
    key: 'drop',
    value: function drop(matches) {
      var _this = this;

      var matchedSmoot = void 0;
      var centerPos = void 0;
      matches.forEach(function (pos) {
        matchedSmoot = _this.grid[pos[0]][pos[1]];
        centerPos = matchedSmoot.centerPos;
        _this.grid[pos[0]][pos[1]] = new _smoot_space2.default({
          gridPos: [pos[0], pos[1]],
          centerPos: centerPos
        });
      });
    }
  }, {
    key: 'findClosestPosAndGridPos',
    value: function findClosestPosAndGridPos(smoot) {
      var closestPos = void 0;
      var gridPos = [];

      for (var rowIdx = 0; rowIdx < _settings2.default.BOARD.ROW_COUNT; rowIdx++) {
        for (var slotIdx = 0; slotIdx < _settings2.default.BOARD.ROW_SIZE; slotIdx++) {
          var hangingObject = this.grid[rowIdx][slotIdx];
          var newDistance = Utils.getDistanceBetween2(smoot.centerPos, hangingObject.centerPos);

          if (hangingObject instanceof _smoot_space2.default && newDistance < _settings2.default.SMOOT.RADIUS * 2) {
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
  }, {
    key: 'findNeighboringSmootMatches',
    value: function findNeighboringSmootMatches(smoot) {
      var _this2 = this;

      // let matchingSmoots = [];
      var smootGridPos = smoot.gridPos;
      var matchingPositions = [smootGridPos];
      var neighborGridPositions = this.getNeighborGridPositions(smootGridPos);

      // ensure the neighbors are Smoots
      var smootNeighborPositions = neighborGridPositions.filter(function (pos) {
        return _this2.grid[pos[0]][pos[1]] instanceof _smoot2.default;
      });

      // filter for neighbor smoots
      smootNeighborPositions.forEach(function (smootNeighborPos) {
        var neighborSmoot = _this2.grid[smootNeighborPos[0]][smootNeighborPos[1]];

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
  }, {
    key: 'getNeighborGridPositions',
    value: function getNeighborGridPositions(gridPos) {
      // gridPos: [rowIdx, slotIdx]

      var positions = [];

      // first row leans right
      var leaningLeft = Boolean(gridPos[0] % 2);

      var gridDirections = leaningLeft ? _settings2.default.BOARD.GRID_DIRECTIONS_LEFT : _settings2.default.BOARD.GRID_DIRECTIONS_RIGHT;

      var neighborPos = void 0;
      gridDirections.forEach(function (direction) {
        neighborPos = [gridPos[0] + direction[0], gridPos[1] + direction[1]];
        if (neighborPos[0] >= 0 && neighborPos[0] < _settings2.default.BOARD.ROW_COUNT && neighborPos[1] >= 0 && neighborPos[1] < _settings2.default.BOARD.ROW_SIZE) {
          positions.push(neighborPos);
        }
      });

      return positions;
    }
  }, {
    key: 'resetChecks',
    value: function resetChecks() {
      this.grid.forEach(function (row) {
        row.forEach(function (hangingObject) {
          if (hangingObject instanceof _smoot2.default) {
            hangingObject.resetCheck();
          }
        });
      });
    }
  }]);

  return Board;
}();

exports.default = Board;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _my_canvas = __webpack_require__(1);

var MyCanvas = _interopRequireWildcard(_my_canvas);

var _settings = __webpack_require__(0);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cannon = function () {
  function Cannon(game) {
    _classCallCheck(this, Cannon);

    this.canvasElement = MyCanvas.getElement();
    this.canvasBorders = MyCanvas.getBorders();

    this.game = game;

    this.base = {
      radius: _settings2.default.CANNON.RADIUS,
      centerX: _settings2.default.BOARD.WIDTH / 2,
      centerY: _settings2.default.BOARD.HEIGHT + 2
    };

    this.boreSize = {
      length: this.base.radius * 2,
      width: 5
    };

    this.borePos = {
      angle: Math.PI / 2,
      mouseX: _settings2.default.BOARD.WIDTH / 2,
      mouseY: _settings2.default.BOARD.HEIGHT - this.base.radius - this.boreSize.length
    };

    this.firePower = _settings2.default.CANNON.FIREPOWER;

    this.getMousePosition = this.getMousePosition.bind(this);
    this.logMousePosition = this.logMousePosition.bind(this);
    this.fireSmoot = this.fireSmoot.bind(this);
  }

  _createClass(Cannon, [{
    key: 'draw',
    value: function draw(ctx) {
      // this.drawCursorPos(ctx, this.borePos);
      // this.drawCursor(ctx, this.borePos);

      this.drawBase(ctx, this.base);

      // this.drawLineBore(ctx, this.boreSize, this.borePos);
      this.drawTriangleBore(ctx, this.boreSize, this.borePos);
    }
  }, {
    key: 'drawCursor',
    value: function drawCursor(ctx, _ref) {
      var mouseX = _ref.mouseX,
          mouseY = _ref.mouseY;

      // Tracking the cursor
      ctx.fillRect(mouseX, mouseY, 2, 2);
    }
  }, {
    key: 'drawCursorPos',
    value: function drawCursorPos(ctx, _ref2) {
      var angle = _ref2.angle,
          mouseX = _ref2.mouseX,
          mouseY = _ref2.mouseY;

      ctx.fillStyle = "white";
      ctx.font = '24px serif';
      ctx.fillText('angle: ' + angle.toFixed(2) + ' rad, x: ' + mouseX + ', y: ' + mouseY, 20, 20);
    }
  }, {
    key: 'drawBase',
    value: function drawBase(ctx, _ref3) {
      var radius = _ref3.radius,
          centerX = _ref3.centerX,
          centerY = _ref3.centerY;

      ctx.fillStyle = this.game.smoot.color;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, Math.PI, 0);
      ctx.fill();
      ctx.closePath();
    }
  }, {
    key: 'drawLineBore',
    value: function drawLineBore(ctx, _ref4, _ref5) {
      var length = _ref4.length,
          width = _ref4.width;
      var angle = _ref5.angle,
          mouseX = _ref5.mouseX,
          mouseY = _ref5.mouseY;
      var _base = this.base,
          radius = _base.radius,
          centerX = _base.centerX,
          centerY = _base.centerY;

      ctx.strokeStyle = this.game.smoot.color;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(centerX + length * Math.cos(angle), centerY - length * Math.sin(angle));
      ctx.stroke();
    }
  }, {
    key: 'drawTriangleBore',
    value: function drawTriangleBore(ctx, _ref6, _ref7) {
      var length = _ref6.length,
          width = _ref6.width;
      var angle = _ref7.angle,
          mouseX = _ref7.mouseX,
          mouseY = _ref7.mouseY;

      // TODO: use trig to find way to keep angles consistent on rotation
      var _base2 = this.base,
          radius = _base2.radius,
          centerX = _base2.centerX,
          centerY = _base2.centerY;

      ctx.strokeStyle = this.game.smoot.color;
      ctx.beginPath();
      ctx.moveTo(centerX - radius / 2, centerY);
      ctx.lineTo(centerX + radius / 2, centerY);
      ctx.lineTo(centerX + length * Math.cos(angle), centerY - length * Math.sin(angle));
      ctx.closePath();
      ctx.fill();
    }
  }, {
    key: 'fireSmoot',
    value: function fireSmoot() {
      // prevent changing direction while smoot is flying
      this.game.smoot.vel = [this.firePower * Math.cos(this.borePos.angle), -this.firePower * Math.sin(this.borePos.angle)];
    }
  }, {
    key: 'getMousePosition',
    value: function getMousePosition(event) {
      var borders = this.canvasBorders;
      this.borePos = {
        angle: Math.atan2(this.base.centerY - (event.clientY - borders.top), event.clientX - borders.left - this.base.centerX),
        mouseX: event.clientX - borders.left,
        mouseY: event.clientY - borders.top
      };
    }
  }, {
    key: 'logMousePosition',
    value: function logMousePosition(event) {
      console.log(this.borePos);
      console.log(this.borePos);
    }
  }]);

  return Cannon;
}();

exports.default = Cannon;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SmootSpace = function () {
  function SmootSpace(options) {
    _classCallCheck(this, SmootSpace);

    this.color = options.color || _settings2.default.SMOOT_SPACE.COLOR;
    this.centerPos = options.centerPos;
    this.gridPos = options.gridPos;
    this.radius = options.radius || _settings2.default.SMOOT.RADIUS;
    this.vel = options.vel || [0, 0];
  }

  _createClass(SmootSpace, [{
    key: 'draw',
    value: function draw(ctx) {
      // this.drawBlanks();
      this.drawCircle(ctx);
    }
  }, {
    key: 'drawBlanks',
    value: function drawBlanks() {}
  }, {
    key: 'drawCircle',
    value: function drawCircle(ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.centerPos[0], this.centerPos[1], this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }]);

  return SmootSpace;
}();

exports.default = SmootSpace;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game_view = __webpack_require__(5);

var _game_view2 = _interopRequireDefault(_game_view);

var _game = __webpack_require__(4);

var _game2 = _interopRequireDefault(_game);

var _settings = __webpack_require__(0);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  var canvasElement = document.getElementsByTagName("canvas")[0];
  canvasElement.width = _settings2.default.BOARD.WIDTH;
  canvasElement.height = _settings2.default.BOARD.HEIGHT;
  canvasElement.style.cursor = "none"; // TODO: move to CSS

  var ctx = canvasElement.getContext("2d");
  var game = new _game2.default();
  var gameView = new _game_view2.default(game, ctx);
  gameView.start();

  window.game = game;
  window.gameView = gameView;
});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map