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
let playerPosition = canvas.height /2;
let computerPosition = canvas.height /2;
let moveX = -2;
let moveY = -1;
let ballRadius = 20;

document.addEventListener("keydown", movePaddle)
function movePaddle(e){
   switch(e.code) {
     case "ArrowUp":
       playerPosition -= 15;
       break;
     case "ArrowDown":
       playerPosition += 15;
       break;
   }
}

function drawPlayerPaddle(){
  ctx.fillStyle = "red";
  ctx.fillRect(15,playerPosition - poddleHeight / 2,poddleWidth,poddleHeight);
}

function drawComputerPaddle(){
  ctx.fillStyle = "blue";
  ctx.fillRect(canvas.width - 20, canvas.height / 2 - poddleHeight / 2,poddleWidth,poddleHeight);
}

function drawBall(){
  ctx.beginPath();
  ctx.fillStyle = "Green";
  ctx.arc(ballX, ballY, ballRadius, 0, 2*Math.PI);
  ctx.fill();
  ballX += moveX;
  ballY += moveY;
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

function collide(){
  

  if(ballY > canvas.height - ballRadius || ballY - ballRadius <= 0){
    moveY = -moveY;
  }
  if(ballX <= ballRadius){

  }else if(ballX + ballRadius >= canvas.width){

  }

  if(ballX <= ballRadius + poddleWidth && Math.abs(ballY - playerPosition) <= poddleHeight / 2 + ballRadius ){
    moveX = -moveX;
  }

  if(ballX + ballRadius >= canvas.width - poddleWidth && Math.abs(ballY - computerPosition) <= poddleHeight / 2 + ballRadius ){
    moveX = -moveX;
  }

  
}

function loop(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  drawBall();
  drawPlayerPaddle();
  drawComputerPaddle();
  drawScore();
  drawCanvas();
  collide();
}
setInterval(loop, 15);

