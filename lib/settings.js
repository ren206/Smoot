export default {
  // Board settings
  BOARD: {
    WIDTH: 700,
    HEIGHT: 700,
    BG_COLOR: 'black',
    ROW_SIZE: 13,
    ROW_COUNT: 14,
    FILLED_ROW_COUNT: 6,
    OFFSET: 12,
    GRID_DIRECTIONS_LEFT: [
      [-1, -1],
      [-1, 0],
      [0, -1],
      [0, 1],
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
    ],
  },

  // Bottom line settings
  BOTTOM_LINE: {
    COLOR: "pink",
  },

  // Cannon settings
  CANNON: {
    FIREPOWER: 15,
    RADIUS: 30,
  },

  // Smoot settings
  SMOOT: {
    RADIUS: 25,
    NUM_COLORS: 6,
    COLORS: [
      "red",
      "green",
      "blue",
      "orange",
      "purple",
      "silver",
    ]
  },

  SMOOT_SPACE: {
    COLOR: "gray",
  },

}
