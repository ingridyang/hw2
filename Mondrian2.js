function setup() {
  createCanvas(800, 800);
}

function draw() {
  var leftLineX = 80;
  var rightLineX = 370;
  var topLineY = 160;
  var middleLineY = 320;
  var bottomLineY = 360;
  
  
  background(260);
  noStroke();
  strokeCap(SQUARE);
 
  fill(220,0,0); // red
  rect(700, 0, 300, 200); // small red rect
  
  fill (0,120, 255); // blue
  rect(0, middleLineY, leftLineX, height-middleLineY); // small blue rect
  
  fill (255, 255, 0) // yellow
  rect(rightLineX, bottomLineY, width-rightLineX, height-bottomLineY); // yellow rect
  
 	stroke(0);
  strokeWeight(10); 
  line (0, middleLineY, width, middleLineY); // middle vertical
  line (leftLineX, 0, leftLineX, height) // left vertical
  line (rightLineX, middleLineY, rightLineX, height); // right vertical
  
  strokeWeight(15);
  line(80, bottomLineY, width, bottomLineY); // bottom hor
  
  strokeWeight(20);
  line(0, 160, 80, 160); // top horizontal
    
  
// new
	fill(255, 255, 0); // yellow
  rect(90, 0, 100, 310); // long yellow rect
  
  fill (220,0,0); // red
  rect(mouseX, 500, 130, 130); // small red square
  
  fill (0,120, 255) // blue
  rect(400, 0, mouseY, 310); // long blue rect
  
 	stroke(0);
  strokeWeight(10); 
  line (0, middleLineY, width, middleLineY); // middle vertical
  line (mouseX, 0, mouseY, height) // left vertical
  line (rightLineX, middleLineY, rightLineX, height); // right vertical
  line (mouseX, 200, mouseY, 200)
  
  strokeWeight(15);
  line(rightLineX, bottomLineY, width, bottomLineY); // bottom hor
  
  strokeWeight(20);
  line(0, mouseX, 80, mouseY); // top horizontal
  line (85, 500, 375, 500)
  line (220, mouseX, 220, mouseY)
  
}
