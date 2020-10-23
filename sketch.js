cloudSpeed = 3;

function setup() {
  createCanvas(800, 800);
  //background(164, 211, 247);
  xpos = 10;
}

function draw() {
  background(164, 211, 247);
  mountain(0, 450, 220, 245);
  mountain(500, 450, 220, 245);
  mountain(200, 400, 240, 255);
  clouds(xpos, 200);
  xpos = xpos + cloudSpeed;

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
