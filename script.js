const canvas = document.querySelector('canvas');
canvas.width = 800;
canvas.height = 400;

const ctx = canvas.getContext("2d");
const poddleWidth = 8;
const poddleHeight = 80;


ctx.fillStyle = "red";
ctx.fillRect(15,canvas.height / 2 - poddleHeight / 2,poddleWidth,poddleHeight);

ctx.fillStyle = "blue";
ctx.fillRect(canvas.width - 20, canvas.height / 2 - poddleHeight / 2,poddleWidth,poddleHeight);

ctx.fillStyle = "Green";
ctx.arc(canvas.width / 2, canvas.height / 2, 30, 0, 2*Math.PI);
ctx.fill();