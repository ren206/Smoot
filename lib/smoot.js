class Smoot {
  constructor(options) {
    this.color = options.color;
    this.pos = options.pos;
    this.radius = options.radius;
  }

  draw(ctx) {
    const {centerX, centerY} = this.pos;
    ctx.beginPath();
    ctx.arc(centerX, centerY, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

Smoot.COLORS = [
  "red",
  "green",
  "blue"
]

export default Smoot;
