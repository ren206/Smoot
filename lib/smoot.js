import GameView from './game_view';

document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello from the DOM");
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = 700;
  canvasEl.height = 500;

  const ctx = canvasEl.getContext("2d");
  // new GameView(ctx).start();
})
