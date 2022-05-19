let myCanvas = document.querySelector("#my-canvas");
let ctx = myCanvas.getContext("2d");

ctx.lineWidth = 3;
ctx.strokeRect(10, 10, 380, 280);
ctx.strokeStyle = "black";
ctx.fillStyle = "green";
ctx.fillRect(12, 12, 376, 276);

let centerX = myCanvas.width / 2,
  centerY = myCanvas.height / 2.6;

ctx.beginPath();
ctx.arc(centerX, centerY, 80, 0, 2 * Math.PI, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();
