import * as MyCanvas from './my_canvas';

class Smoot {
  constructor(options) {
    this.canvasElement = MyCanvas.getElement();
    this.canvasBorders = MyCanvas.getBorders();

    this.color = options.color;
    this.pos = options.pos;
    this.radius = options.radius;
    this.vel = options.vel || {velX: 0, velY: 0};
  }

  draw(ctx) {
    this.drawSmootPos(ctx, this.pos);
    this.drawSmoot(ctx, this.pos, this.radius, this.color);
  }


  drawSmootPos(ctx, {centerX, centerY}) {
    ctx.fillStyle = "gray";
    ctx.font = '24px serif';
    ctx.fillText(`smootX: ${centerX.toFixed(1)}, smootY: ${centerY.toFixed(1)}`, 20, 50);
  }

  drawSmoot(ctx, {centerX, centerY}, radius, color) {
    this.move();
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
    const borders = this.canvasBorders;
    if (this.pos.centerY - this.radius <= borders.top) {
      this.stop();
    };
    if ((this.pos.centerX + this.radius >= borders.right) || (this.pos.centerX - this.radius <= borders.left)) {
      this.vel.velX = -this.vel.velX;
    }
    if (this.pos.centerY - this.radius <= borders.top) {
      this.vel.velY = -this.vel.velY;
    }

    this.pos.centerX += this.vel.velX;
    this.pos.centerY += this.vel.velY;
  }

  stop() {
    this.vel.velX = 0;
    this.vel.velY = 0;
  }
}

Smoot.COLORS = [
  "red",
  "green",
  "blue"
]

export default Smoot;
