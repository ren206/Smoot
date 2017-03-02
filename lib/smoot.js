class Smoot {
  constructor(options) {
    this.color = options.color;
    this.pos = options.pos;
    this.radius = options.radius;
    this.vel = options.vel || {velX: 0, velY: 0};
  }

  draw(ctx) {
    const {centerX, centerY} = this.pos;
    ctx.beginPath();
    ctx.arc(centerX, centerY, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  fire() {
    this.vel = { velX: 0, velY: -1 };
    const {centerX, centerY} = this.pos;

    this.pos.centerY += this.vel.velY;
  }
}

Smoot.COLORS = [
  "red",
  "green",
  "blue"
]

export default Smoot;
