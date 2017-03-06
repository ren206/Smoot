export default {
  // Board settings
  BOARD: {
    WIDTH: 700,
    HEIGHT: 700,
    BG_COLOR: '#000',
    ROW_SIZE: 13,
    ROW_COUNT: 13,
    FILLED_ROW_COUNT: 6,
    OFFSET: 12,
    GRID_DIRECTIONS_LEFT: [
      [-1, -1],
      [-1, 0],
      [0, -1],
      [1, 0],
      [1, -1],
      [1, 0]
    ],
    GRID_DIRECTIONS_RIGHT: [
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, 0],
      [1, 1]
    ]
  },

  // Cannon settings
  CANNON: {
    FIREPOWER: 15,
  },

  // Smoot settings
  SMOOT: {
    RADIUS: 25,
    COLORS: [
      "red",
      "green",
      "blue",
      // "yellow",
      // "orange",
      // "purple"
    ]
  }

}
