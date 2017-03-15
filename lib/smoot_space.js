import Settings from './settings';

class SmootSpace {
  constructor(options) {
    this.color = Settings.SMOOT_SPACE.COLOR;
    this.centerPos = options.centerPos;
    this.gridPos = options.gridPos;
    this.radius = Settings.SMOOT.RADIUS;
    this.vel = options.vel || [0, 0];
  }

  draw(ctx) {
    this.drawBlanks();
    // this.drawCircle(ctx);
  }

  drawBlanks() {}

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
}

export default SmootSpace;
