class Cannon {
  constructor(smoot) {
    this.canvasElement = document.getElementsByTagName("canvas")[0];

    this.base = {
      radius: 50,
      centerX: this.canvasElement.width / 2,
      centerY: this.canvasElement.height
    }

    this.boreSize = {
      length: this.base.radius * 2,
      width: 5
    }

    this.borePos = {
      angle: Math.PI / 2,
      mouseX: this.canvasElement.width / 2,
      mouseY: this.canvasElement.height - this.base.radius - this.boreSize.length
    }

    this.getMousePosition = this.getMousePosition.bind(this);
    this.canvasElement.addEventListener("mousemove", this.getMousePosition, false);

    this.logMousePosition = this.logMousePosition.bind(this);
    this.canvasElement.addEventListener("click", this.logMousePosition, false);
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
    this.drawPos(ctx, this.borePos);

    this.drawBase(ctx, this.base);

    this.drawBore(ctx, this.boreSize, this.borePos);

    this.drawSmoot(ctx);
  }

  drawPos(ctx, { angle, mouseX, mouseY}) {
    ctx.fillStyle = "white";
    ctx.font = '24px serif';
    ctx.fillText(`angle: ${angle} \n x: ${mouseX} \n y: ${mouseY}`, 20, 20);
  }

  drawBase(ctx, { radius, centerX, centerY }) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI, 0);
    ctx.fillStyle = "#FFFFFF";
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

  drawSmoot() {
    
  }
}

export default Cannon;
