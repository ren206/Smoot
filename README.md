# Smoot

[Smoot live](http://www.mren.io/Smoot "Live link")

Smoot is a browser-based circle-matching game. The goal of the game is to clear the board of the colorful circles and not pile them up to the bottom.

## How to Play
The cannon at the base of the board tracks your mouse position to aim and fires a smoot on click. To clear smoots, shoot a smoot onto a group of 3 or more (including the one shot) of the same color. If smoots pile up to the bottom area of the screen, the player loses.

## Technologies Used
* JavaScript
* HTML5 Canvas
* Native Browser DOM API

## Implementation

### Cannon Pivoting
I implemented mouse cursor tracking by using the `mousemove` event listener. To calculate the angle of the cannon bore (pivoting portion), I found the artangent of the mouse cursor position obtained by the `mousemove` event relative to the center of the cannon base.

```JavaScript
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
```

There were a few tricks in this method. For one thing, there is an offset between the mouse position and the canvas coordinates, as the mouse position is relative to the browser. Another factor to consider is that the origin (0, 0) of the canvas lies in the top-left corner, which results in the differences between the x and y positions in calculating the angle.


### Smoot Motion
In terms of how the smoot moves and stops, there were several factors. The motion entailed setting a velocity upon the cannon calling `fireSmoot()`, which sets the loaded smoot's velocity:

```JavaScript
fireSmoot() {
  this.game.smoot.vel = [
    this.firePower * Math.cos(this.borePos.angle),
    -this.firePower * Math.sin(this.borePos.angle)
  ]
}
```

Again, accounting for the location of the canvas origin, the y-velocity must be negated. The velocity is set based on the angle of the cannon bore (pivoting portion), and it results in motion through the smoot's `move()` method:

```JavaScript
move() {
  if ((this.centerPos[0] + this.radius >= Settings.BOARD.WIDTH) || (this.centerPos[0] <= this.radius)) {
    this.vel[0] = -this.vel[0];
  }

  this.centerPos[0] += this.vel[0];
  this.centerPos[1] += this.vel[1];
}
```

The move method increments the `centerPos` of the smoot, which is the origin by which each smoot is drawn in its draw method. If a smoot collides with the left or right border of the canvas, the x-velocity is negated, effectively reversing its direction.

### The Grid
As for ensuring that a smoot land in an appropriate location upon collision with another smoot or the top border, there are smoot placeholders on the whole board; where there isn't a visible smoot, there is a `SmootSpace` object that has the relevant attributes in common but no draw method. Upon collision, the board checks for the closest `gridPos` and `centerPos` and assigns it to the new smoot and assigns that location on the board's grid to hold the newly landed smoot.

```JavaScript
addToGrid(smoot) {
  let closestPos, gridPos;
  [closestPos, gridPos] = this.findClosestPosAndGridPos(smoot);

  smoot.stop();
  [smoot.centerPos, smoot.gridPos] = [closestPos, gridPos];
  this.grid[gridPos[0]][gridPos[1]] = smoot;
}
```

Having the two classes of objects on the grid simplifies many operations in the game. For instance, when the smoots are cleared, the board simply creates new `SmootSpace`s in those places.

To check for smoot matches, I use the board's `getNeighborGridPositions(gridPos)` method to find the recently landed smoot's neighbors, filter them for just `Smoot`s and not `SmootSpace`s, and for the matching smoots, recursively find their matching neighbors. To ensure I don't check the same ones more than once, I set a property `isChecked` to be true on a smoot as I check it.

## Future Features
[ ] Dropping floaters
[ ] Scores
[ ] Music that can be muted
[ ] Levels of incrementing difficulty
[ ] Scalable size for different-sized screens
