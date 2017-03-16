export default {
  // Board settings
  BOARD: {
    WIDTH: 690,
    HEIGHT: 600,
    // BG_COLOR: '#182838',
    BG_COLOR: '#000',
    ROW_SIZE: 13,
    ROW_COUNT: 13,
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
  BOTTOM: {
    COLOR: "#280554",
    HEIGHT: 40,
  },

  // Cannon settings
  CANNON: {
    FIREPOWER: 20,
    RADIUS: 30,
    LENGTH: 60,
    WIDTH: 30,
  },

  // Smoot settings
  SMOOT: {
    RADIUS: 25,
    NUM_COLORS: 3,
    COLORS: [
      '#b73131',// "red",
      '#33b72e',// "green",
      '#2d44b7',// "darkblue",
      '#b78530',// "orange",
      '#6f2db7',// "purple",
      '#2db7ab',// "lightblue",
    ]
  },

  SMOOT_SPACE: {
    COLOR: "#aaafb7",
  },

  TEXT: {
    COLOR: "#aaafb7",
  },

}
