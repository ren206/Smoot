class Cannon {
  constructor() {}

  draw(ctx) {
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(100, 75, 50, Math.PI, 0);
    ctx.closePath();
  }
}

export default Cannon;
