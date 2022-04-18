const canvas = document.querySelector('canvas');
canvas.width = 800;
canvas.height = 400;

const ctx = canvas.getContext("2d");
const poddleWidth = 8;
const poddleHeight = 80;
let playerScore = 0;
let computerScore = 0;
let ballX = canvas.width /2;
let ballY = canvas.height /2;

function drawPlayerPaddle(){
  ctx.fillStyle = "red";
  ctx.fillRect(15,canvas.height / 2 - poddleHeight / 2,poddleWidth,poddleHeight);
}

function drawComputerPaddle(){
  ctx.fillStyle = "blue";
  ctx.fillRect(canvas.width - 20, canvas.height / 2 - poddleHeight / 2,poddleWidth,poddleHeight);
}

function drawBall(){
  ctx.beginPath();
  ctx.fillStyle = "Green";
  ctx.arc(ballX, ballY, 30, 0, 2*Math.PI);
  ctx.fill();
  ballX += 2;
  ballY += 1;
}

function drawScore(){
  ctx.fillStyle = "red";
  ctx.font = "30px Helvetica";
  ctx.fillText(playerScore, canvas.width / 4, 50);
  ctx.fillStyle = "Blue";
  ctx.fillText(computerScore, canvas.width * 0.75, 50);
}

function drawCanvas(){
  ctx.beginPath();
  ctx.setLineDash([6]);
  ctx.moveTo(canvas.width /2,0 );
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height /2, 30, 0, 2*Math.PI);
  ctx.stroke();
}

function loop(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  drawBall();
  drawPlayerPaddle();
  drawComputerPaddle();
  drawScore();
  drawCanvas();
}
setInterval(loop, 15)