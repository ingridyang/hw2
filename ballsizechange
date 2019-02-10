function setup() {
  createCanvas(400, 400);
}

var ball = 0
var ballSpeed = 10
var ballChangeX = ballSpeed

var ball2 = 100
var ballSpeed2 = 5
var ballChangeX2 = ballSpeed2

var ball3 = 200
var ballSpeed3 = 15
var ballChangeX3 = ballSpeed2

function draw() {
  background(220);
  fill (200, 200, 0)
  ellipse(height /2, ball, ball, 100);
  fill (20, 200, 0)
  ellipse(height/4, ball2, 50);
  fill (140, 0, 100)
  ellipse(ball3, height/6, ball, 20);
  
  
  ball = ball + ballChangeX;
  ball2 = ball2 + ballChangeX2
  ball3 = ball3 + ballChangeX3
  
  // check if ball is off right side of screen
  if (ball >= width) {
    ballChangeX = -ballSpeed;
  }
  if (ball2 >= width) {
    ballChangeX2 = -ballSpeed2;
  }
  if (ball3 >= width) {
    ballChangeX3 = -ballSpeed3;
  }
//check if ball is off left hand side of screen
	if (ball <= 0) {
    ballChangeX = ballSpeed;
}
  if (ball2 <= 0) {
    ballChangeX2 = ballSpeed2;
  }
  if (ball3 <= 0) {
    ballChangeX3 = ballSpeed3;
  }
}
