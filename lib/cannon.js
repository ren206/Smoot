class Cannon {
  constructor() {
    this.canvasElement = document.getElementsByTagName("canvas")[0];

    this.x = this.canvasElement.width / 2;
    this.y = this.canvasElement.height;
    this.getMousePosition = this.getMousePosition.bind(this);
    this.canvasElement.addEventListener("mousemove", this.getMousePosition, false);
  }

  getMousePosition(event) {
    const clientRect = this.canvasElement.getBoundingClientRect();

      this.x = event.clientX - clientRect.left;
      this.y = event.clientY - clientRect.top;
  }

  draw(ctx) {
    this.drawBase(ctx);

    this.drawMovingPart(ctx, this.x, this.y);
  }

  drawBase(ctx) {
    const canvas = ctx.canvas;
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height, 50, Math.PI, 0);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.closePath();

  }

  drawMovingPart(ctx, x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 10, Math.PI, 0);
    ctx.fillStyle="white";
    ctx.fill();
    ctx.closePath();
  }
}

export default Cannon;
