class Mountain {
	constructor(x, y, shadowColor, peakColor) {
this.x = x;
this.y = y
this.shadowColor = shadowColor;
this.peakColor = peakColor;
	}

display() {
//peak of mountain
  fill(this.peakColor);
  noStroke();
  beginShape();
  vertex(this.x, this.y);
  vertex(this.x + 155, this.y - 300);
  vertex(this.x + 290, this.y - 20);
  vertex(this.x + 290, this.y + 50);
  vertex(this.x, this.y);
  endShape();
  //mountain
  fill(this.shadowColor);
  noStroke();
  beginShape();
  vertex(this.x - 200, this.y + 400);
  vertex(this.x, this.y);
  vertex(this.x + 25, this.y - 40);
  vertex(this.x + 40, this.y - 10);
  vertex(this.x + 65, this.y - 90);
  vertex(this.x + 80, this.y - 50);
  vertex(this.x + 120, this.y - 150);
  vertex(this.x + 145, this.y - 110);
  vertex(this.x + 155, this.y - 130);
  vertex(this.x + 190, this.y - 60);
  vertex(this.x + 220, this.y - 100);
  vertex(this.x + 280, this.y + 10);
  vertex(this.x + 290, this.y - 20);
  vertex(this.x + 450, this.y + 400);
  vertex(this.x - 200, this.y + 400);
  endShape();
}
}