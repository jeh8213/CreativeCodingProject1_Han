function setup() {
  createCanvas(800, 800);
  background(164, 211, 247);
  
}

function draw() {
  mountain(0, 450, 220, 245);
  mountain(500, 450, 220, 245);
  mountain(200, 400, 240, 255);
  
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

function clouds(cloudOpacity) {
  fill(255, 255, 255, cloudOpacity);
  stroke(255, 255, 255, cloudOpacity);
  strokeWeight(20);
  strokeJoin(ROUND);
  beginShape();
  vertex(10, 150);
  vertex(20, 135);
  vertex(35, 140);
  vertex(55, 120);
  vertex(75, 130);
  vertex(100, 105);
  vertex(125, 130);
  vertex(150, 125);
  vertex(170, 140);
  vertex(190, 135);
  vertex(210, 150);
  vertex(10, 150);
  endShape();
}
