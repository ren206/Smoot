class Cannon {
  constructor(game) {

    this.canvasElement = document.getElementsByTagName("canvas")[0];

    this.game = game;

    this.base = {
      radius: 30,
      centerX: this.game.constructor.WIDTH / 2,
      centerY: this.game.constructor.HEIGHT + 2
    }

    this.boreSize = {
      length: this.base.radius * 1.5,
      width: 5
    }

    this.borePos = {
      angle: Math.PI / 2,
      mouseX: this.game.constructor.WIDTH / 2,
      mouseY: this.game.constructor.HEIGHT - this.base.radius - this.boreSize.length
    }

    this.getMousePosition = this.getMousePosition.bind(this);
    this.logMousePosition = this.logMousePosition.bind(this);
    this.fireSmoot = this.fireSmoot.bind(this);
  }

  getMousePosition(event) {
    const clientRect = this.canvasElement.getBoundingClientRect();

      this.borePos = {
        angle: Math.atan2(
          this.base.centerY - (event.clientY - clientRect.top),
          (event.clientX - clientRect.left) - this.base.centerX
        ),
        mouseX: event.clientX - clientRect.left,
        mouseY: event.clientY - clientRect.top
      }
  }

  logMousePosition(event) {
    console.log(this.borePos);
    console.log(this.borePos);
  }

  draw(ctx) {
    this.drawCursorPos(ctx, this.borePos);

    this.drawBase(ctx, this.base);

    this.drawBore(ctx, this.boreSize, this.borePos);
  }

  drawCursorPos(ctx, { angle, mouseX, mouseY}) {
    ctx.fillStyle = "white";
    ctx.font = '24px serif';
    ctx.fillText(`angle: ${angle} \n x: ${mouseX} \n y: ${mouseY}`, 20, 20);
  }

  drawBase(ctx, { radius, centerX, centerY }) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI, 0);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

  }

  drawBore(ctx, {length, width}, {angle, mouseX, mouseY}) {
    const { radius, centerX, centerY } = this.base;
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(
      centerX + length * Math.cos(angle),
      centerY - length * Math.sin(angle)
    );
    ctx.stroke();

    // Tracking the cursor
    // ctx.fillRect(mouseX, mouseY, width, length);
  }

  fireSmoot() {
    this.game.loadedSmoot.vel = {
      velX: 10 * Math.cos(this.borePos.angle),
      velY: - 10 * Math.sin(this.borePos.angle)
    }
  }

}

export default Cannon;
