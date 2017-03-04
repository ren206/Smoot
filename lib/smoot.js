import * as MyCanvas from './my_canvas';
import Settings from './settings';

class Smoot {
  constructor(options) {
    this.canvasElement = MyCanvas.getElement();
    this.canvasBorders = MyCanvas.getBorders();

    this.color = options.color || Settings.SMOOT.COLORS[Math.floor(Math.random() * Settings.SMOOT.COLORS.length)];
    this.centerPos = options.centerPos;
    this.gridPos = options.gridPos;
    this.radius = options.radius || Settings.SMOOT.RADIUS;
    this.vel = options.vel || [0, 0];
  }

  collidedWithTop() {
    return this.centerPos[1] <= this.radius;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.centerPos[0], this.centerPos[1], this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    // this.drawSmoot(ctx, this.pos, this.radius, this.color);
  }

  // drawSmoot(ctx, {centerX, centerY}, radius, color) {
  //   ctx.beginPath();
  //   ctx.arc(centerX, centerY, this.radius, 0, Math.PI * 2);
  //   ctx.fillStyle = this.color;
  //   ctx.fill();
  // }

  // onSmootEdge({x, y}) {
  //   const {centerX, centerY} = this.pos;
  //   (x - centerX)^2 + (y - centerY)^2 <= this.radius^2;
  // }

  move() {
    // const borders = this.canvasBorders;
    // if (this.pos.centerY - this.radius <= borders.top) {
    //   this.stop();
    // };
    if ((this.centerPos[0] + this.radius >= Settings.BOARD.WIDTH) || (this.centerPos[0] <= this.radius)) {
      this.vel[0] = -this.vel[0];
    }
    // if (this.pos.centerY - this.radius <= borders.top) {
    //   this.vel[1] = -this.vel[1];
    // }

    this.centerPos[0] += this.vel[0];
    this.centerPos[1] += this.vel[1];
  }

  // stop() {
  //   this.vel[0] = 0;
  //   this.vel[1] = 0;
  // }
}

export default Smoot;
