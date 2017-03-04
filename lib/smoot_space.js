import Settings from './settings';

class SmootSpace {
  constructor(options) {
    this.color = options.color || Settings.SMOOT.COLORS[Math.floor(Math.random() * Settings.SMOOT.COLORS.length)];
    this.centerPos = options.centerPos;
    this.gridPos = options.gridPos;
    this.radius = options.radius || Settings.SMOOT.RADIUS;
    this.vel = options.vel || [0, 0];
  }

  draw(ctx) {}
}

export default SmootSpace;
