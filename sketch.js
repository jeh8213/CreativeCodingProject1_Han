let cloudSpeed = 1;
let num = 1;
let birdSpeed = 10;
let birdDirection = 1;


function setup() {
  createCanvas(800, 800);
  //background(164, 211, 247);
  xpos = 10;
  xposTwo = 400;
}

function draw() {
  if(num == 1) {
  frameRate(50);
  background(164, 211, 247);
  mountain(0, 450, 220, 235);
  mountain(500, 450, 220, 235);
  mountain(200, 400, 235, 245);
  fill(255, 255, 155);
  ellipse(70, 70, 60, 60);
  clouds(xpos, 210);
  clouds(xposTwo, 230);
  xpos = xpos + cloudSpeed;
  xposTwo = xposTwo + cloudSpeed;
  
  if(xpos > width) {
    xpos = -200;
  }
  else if(xposTwo > width) {
    xposTwo = -200;
  }
  }
  
  if(num == 2) {
    //background(175, 217, 239);
    //sky();
    fill(175, 217, 239);
    noStroke();
    rect(0, 0, 800, 500);
    fill(249, 224, 160);
    noStroke();
    ellipse(width/2, 500, 325, 325);
    ocean();
    shimmer();
    shimmer();
    shimmer();
    shimmer();
    shimmer();
    shimmer();
    shimmer();
    
    birdMove();
  }
}

function mountain(x, y, shadowColor, peakColor) {
  //peak of mountain
  fill(peakColor);
  noStroke();
  beginShape();
  vertex(x, y);
  vertex(x + 155, y - 300);
  vertex(x + 290, y - 20);
  vertex(x + 290, y + 50);
  vertex(x, y);
  endShape();
  //mountain
  fill(shadowColor);
  noStroke();
  beginShape();
  vertex(x - 200, y + 400);
  vertex(x, y);
  vertex(x + 25, y - 40);
  vertex(x + 40, y - 10);
  vertex(x + 65, y - 90);
  vertex(x + 80, y - 50);
  vertex(x + 120, y - 150);
  vertex(x + 145, y - 110);
  vertex(x + 155, y - 130);
  vertex(x + 190, y - 60);
  vertex(x + 220, y - 100);
  vertex(x + 280, y + 10);
  vertex(x + 290, y - 20);
  vertex(x + 450, y + 400);
  vertex(x, y + 400);
  vertex(x - 200, y + 400);
  endShape();
}

function clouds(cloudPos, cloudOpacity) {
  //default of x is 10
  fill(255, 255, 255, cloudOpacity);
  stroke(255, 255, 255, cloudOpacity);
  strokeWeight(20);
  strokeJoin(ROUND);
  beginShape();
  vertex(cloudPos, 150);
  vertex(cloudPos + 10, 135);
  vertex(cloudPos + 25, 140);
  vertex(cloudPos + 45, 120);
  vertex(cloudPos + 65, 130);
  vertex(cloudPos + 90, 105);
  vertex(cloudPos + 115, 130);
  vertex(cloudPos + 140, 125);
  vertex(cloudPos + 160, 140);
  vertex(cloudPos + 180, 135);
  vertex(cloudPos + 200, 150);
  vertex(cloudPos, 150);
  endShape();
}

function ocean() {
  fill(95, 140, 211);
  noStroke();
  rect(0, 500, 800, 300);
  //shimmer, create randomly generated ellipses at certain locations, u increases while w decreases
}

function shimmer() {
  frameRate(5);
  let u = 505;
  let w = 350;
  while(u < 750) {
  if(w > 0) {
  fill(139, 184, 255, random(5, 30));
  //fill(255, random(25, 50));
  noStroke();
  ellipse(width/2, u, random(w - 150, w + 150), 10, 175);
  w -= 10;
  }
  u += 10;
  }
}

function bird(xBird, yBird) {
  //default for xBird and yBird is 30
  stroke(0);
  strokeWeight(3);
  strokeJoin(ROUND);
  line(xBird, yBird, xBird + 10, yBird + 10);
  line(xBird + 10, yBird + 10, xBird, yBird + 20);
}

function birdFlock() {
  for(let j = 30; j <= 200; j += 35) {
    for(let i = 30; i <= j; i += 35) {
      bird(i, j);
    }
  }
}

function birdMove() {
  push();
  translate(birdSpeed, birdDirection);
  scale(0.8);
  birdFlock();
  birdSpeed += 5;
  birdDirection += 0.8;
  pop();
  if(birdSpeed > 800) {
    birdSpeed = -150;
    birdDirection = 0;
  }
  
}

function mousePressed() {
  num++;
  if (num > 2) {
    num = 1;
  }
}