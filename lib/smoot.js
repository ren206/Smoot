import * as MyCanvas from './my_canvas';
import Settings from './settings';

class Smoot {
  constructor(options) {
    this.canvasElement = MyCanvas.getElement();
    this.canvasBorders = MyCanvas.getBorders();

    this.color = options.color || Settings.SMOOT.COLORS[Math.floor(Math.random() * Settings.SMOOT.COLORS.length)];
    this.pos = options.pos;
    this.radius = options.radius || Settings.SMOOT.RADIUS;
    this.vel = options.vel || {velX: 0, velY: 0};
  }

  collidedWithTop() {
    return this.pos.centerY <= this.radius;
  }

  draw(ctx) {
    this.drawSmoot(ctx, this.pos, this.radius, this.color);
  }

  drawSmoot(ctx, {centerX, centerY}, radius, color) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  // onSmootEdge({x, y}) {
  //   const {centerX, centerY} = this.pos;
  //   (x - centerX)^2 + (y - centerY)^2 <= this.radius^2;
  // }

  move() {
    // const borders = this.canvasBorders;
    // if (this.pos.centerY - this.radius <= borders.top) {
    //   this.stop();
    // };
    if ((this.pos.centerX + this.radius >= Settings.BOARD.WIDTH) || (this.pos.centerX <= this.radius)) {
      this.vel.velX = -this.vel.velX;
    }
    // if (this.pos.centerY - this.radius <= borders.top) {
    //   this.vel.velY = -this.vel.velY;
    // }

    this.pos.centerX += this.vel.velX;
    this.pos.centerY += this.vel.velY;
  }

  // stop() {
  //   this.vel.velX = 0;
  //   this.vel.velY = 0;
  // }
}

export default Smoot;
