class Cannon {
  constructor() {
    this.canvasElement = document.getElementsByTagName("canvas")[0];

    this.base = {
      radius: 50,
      centerX: this.canvasElement.width / 2,
      centerY: this.canvasElement.height
    }

    this.boreSize = {
      length: this.base.radius / 2,
      width: 5
    }
    this.borePos = {
      ang: Math.PI / 2,
      x: this.canvasElement.width / 2,
      y: this.canvasElement.height - this.base.radius - this.boreSize.length
    }

    this.getMousePosition = this.getMousePosition.bind(this);
    this.canvasElement.addEventListener("mousemove", this.getMousePosition, false);

    this.logMousePosition = this.logMousePosition.bind(this);
    this.canvasElement.addEventListener("click", this.logMousePosition, false);
  }

  getMousePosition(event) {
    const clientRect = this.canvasElement.getBoundingClientRect();

      this.borePos = {
        ang: Math.atan2(
          this.base.centerY - (event.clientY - clientRect.top),
          (event.clientX - clientRect.left) - this.base.centerX
        ),
        x: event.clientX - clientRect.left,
        y: event.clientY - clientRect.top
      }
  }

  logMousePosition(event) {
    console.log(this.borePos);
  }

  draw(ctx) {
    this.drawPos(ctx, this.borePos);

    this.drawBase(ctx, this.base);

    this.drawMovingPart(ctx, this.borePos);
  }

  drawPos(ctx, { ang, x, y}) {
    ctx.fillStyle = "white";
    ctx.font = '24px serif';
    ctx.fillText(`ang: ${ang} \n x: ${x} \n y: ${y}`, 20, 20);
  }

  drawBase(ctx, { radius, centerX, centerY }) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI, 0);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.closePath();

  }

  drawMovingPart(ctx, {ang, x, y}) {
    // ctx.beginPath();
    // ctx.arc(x, y, 10, Math.PI, 0);
    // ctx.fillStyle="white";
    // ctx.fill();
    // ctx.closePath();
    // ctx.translate(x, y);
    // ctx.rotate(Math.PI / 3);
    const { length, width } = this.boreSize;
    const { radius, centerX, centerY } = this.base;

    ctx.fillRect(x, y, width, length);
  }
}

export default Cannon;
