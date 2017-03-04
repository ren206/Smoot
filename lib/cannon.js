import * as MyCanvas from './my_canvas';
import Settings from './settings';

class Cannon {
  constructor(game) {
    this.canvasElement = MyCanvas.getElement();
    this.canvasBorders = MyCanvas.getBorders();

    this.game = game;

    // this.firing = false;

    this.base = {
      radius: Settings.SMOOT.RADIUS + 5,
      centerX: Settings.BOARD.WIDTH / 2,
      centerY: Settings.BOARD.HEIGHT + 2
    }

    this.boreSize = {
      length: this.base.radius * 1.5,
      width: 5
    }

    this.borePos = {
      angle: Math.PI / 2,
      mouseX: Settings.BOARD.WIDTH / 2,
      mouseY: Settings.BOARD.HEIGHT - this.base.radius - this.boreSize.length
    }

    this.firePower = Settings.CANNON.FIREPOWER;

    this.getMousePosition = this.getMousePosition.bind(this);
    this.logMousePosition = this.logMousePosition.bind(this);
    this.fireSmoot = this.fireSmoot.bind(this);
  }

  getMousePosition(event) {
    const borders = this.canvasBorders;
    this.borePos = {
      angle: Math.atan2(
        this.base.centerY - (event.clientY - borders.top),
        (event.clientX - borders.left) - this.base.centerX
      ),
      mouseX: event.clientX - borders.left,
      mouseY: event.clientY - borders.top
    }
  }

  logMousePosition(event) {
    console.log(this.borePos);
    console.log(this.borePos);
  }

  draw(ctx) {
    this.drawCursorPos(ctx, this.borePos);
    this.drawCursor(ctx, this.borePos);

    this.drawBase(ctx, this.base);

    this.drawBore(ctx, this.boreSize, this.borePos);

  }

  drawCursor(ctx, {mouseX, mouseY}) {
    // Tracking the cursor
    ctx.fillRect(mouseX, mouseY, 2, 2);
  }
  drawCursorPos(ctx, { angle, mouseX, mouseY}) {
    ctx.fillStyle = "gray";
    ctx.font = '24px serif';
    ctx.fillText(`angle: ${angle.toFixed(2)} rad, x: ${mouseX}, y: ${mouseY}`, 20, 20);
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

  }

  fireSmoot() {
    this.shooting = true;
    this.game.smoot.vel = [
      this.firePower * Math.cos(this.borePos.angle),
      -this.firePower * Math.sin(this.borePos.angle)
    ]
    // {
    //   velX: this.firePower * Math.cos(this.borePos.angle),
    //   velY: -this.firePower * Math.sin(this.borePos.angle)
    // }
    // this.game.board.keepInBounds(this.game.smoot);
  }

}

export default Cannon;
