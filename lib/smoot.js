// import * as MyCanvas from './my_canvas';
import Settings from './settings';
import * as Utils from './utils';

class Smoot {
  constructor(options) {
    // this.canvasElement = MyCanvas.getElement();
    // this.canvasBorders = MyCanvas.getBorders();
    this.color = options.color;
    this.centerPos = options.centerPos;
    this.gridPos = options.gridPos;
    this.radius = Settings.SMOOT.RADIUS;
    this.vel = options.vel || [0, 0];

    // this.sad = Math.random() < 0.5 ? true : false;
    this.sad = Boolean(this.centerPos[1] >= Settings.BOARD.HEIGHT / 3);
  }

  draw(ctx) {
    this.drawCircle(ctx);
    this.drawFace(ctx);
  }

  drawCircle(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.centerPos[0],
      this.centerPos[1],
      this.radius,
      0, Math.PI * 2);
      ctx.fill();
  }

  drawFace(ctx) {
    // left eye
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(
          this.centerPos[0] - this.radius / 2,
          this.centerPos[1] - this.radius / 2,
          4,
          0, Math.PI * 2
        )
        ctx.closePath();
        ctx.fill();

        // right eye
        ctx.beginPath();
        ctx.arc(
          this.centerPos[0] + this.radius / 2,
          this.centerPos[1] - this.radius / 2,
          4,
          0, Math.PI * 2
        )
        ctx.closePath();
        ctx.fill();

        // nose

        // ctx.beginPath();
        //
        // ctx.arc(
        //   this.centerPos[0],
        //   this.centerPos[1],
        //   4,
        //   0, Math.PI * 2
        // )
        // ctx.closePath();
        // ctx.fill();

        // mouth
        let mouthStart, mouthEnd, centerOffset;
        [mouthStart, mouthEnd, centerOffset] = this.sad ? [Math.PI, 0, this.radius * 2/3] : [0, Math.PI, this.radius / 8];
        ctx.beginPath();
        ctx.arc(
          this.centerPos[0],
          this.centerPos[1] + centerOffset,
          this.radius * 2/3,
          mouthStart, mouthEnd
        )
        ctx.closePath();
        ctx.lineWidth = 2;
        ctx.fillStyle = "black";
        ctx.fill();
  }

  // getRandomColor() {
  //   const numColors = Settings.SMOOT.NUM_COLORS;
  //   return Settings.SMOOT.COLORS[Math.floor(Math.random() * numColors)];
  // }

  isCollidedWith(anotherSmoot) {
    const distBetweenCenters = Utils.getDistanceBetween2(this.centerPos, anotherSmoot.centerPos);
    return distBetweenCenters <= this.radius * 2;
  }

  isCollidedWithTop() {
    return this.centerPos[1] <= this.radius;
  }

  matchesWith(smoot) {
    // this.isChecked = true;
    // smoot.isChecked = true;
    return this.color === smoot.color;
  }

  move() {
    if ((this.centerPos[0] + this.radius >= Settings.BOARD.WIDTH) || (this.centerPos[0] <= this.radius)) {
      this.vel[0] = -this.vel[0];
    }

    this.centerPos[0] += this.vel[0];
    this.centerPos[1] += this.vel[1];
    this.sad = Boolean(this.centerPos[1] >= Settings.BOARD.HEIGHT / 3);
  }

  resetCheck() {
    this.isChecked = false;
  }

  stop() {
    this.vel = [0, 0];
  }
}

export default Smoot;
