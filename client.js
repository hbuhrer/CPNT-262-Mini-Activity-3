"use strict";

const canvas = document.getElementById("matrix-rain");
const context = canvas.getContext("2d");

const alphabet =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

let fontSize = 16;
let columns = Math.floor(window.innerWidth / fontSize);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let raindrops = [];

for (let x = 0; x < columns; x++) {
  raindrops[x] = 1;
}

const draw = () => {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#0F0";
  context.font = fontSize + "px monospace";

  for (let i = 0; i < raindrops.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    context.fillText(text, i * fontSize, raindrops[i] * fontSize);

    if (raindrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      raindrops[i] = 0;
    }
    raindrops[i]++;
  }
};

const resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.floor(window.innerWidth / fontSize);
  raindrops = [];
  for (let x = 0; x < columns; x++) {
    raindrops[x] = 1;
  }
};

window.addEventListener("resize", () => {
  resizeCanvas();
  draw();
});

setInterval(draw, 30);