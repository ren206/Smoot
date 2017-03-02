class Cannon {
  constructor() {}

  draw(ctx) {
    const canvas = ctx.canvas;
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height - 10, 50, Math.PI, 0);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.closePath();
  }
}

export default Cannon;
