class Ocean {
	constructor() {
this.u = 505;
this.w = 350;
	}

//displays the ocean
display() {
  fill(95, 140, 211);
  noStroke();
  rect(0, 500, 800, 300);
}

//displays the shimmer of the ocean
shimmer() {
  this.u = 505;
  this.w = 350;
frameRate(5);
  while(this.u < 750) {
  if(this.w > 0) {
  fill(139, 184, 255, random(5, 30));
  //fill(255, random(25, 50));
  noStroke();
  ellipse(width/2, this.u, random(this.w - 150, this.w + 150), 10, 175);
  this.w -= 10;
  }
  this.u += 10;
  }
}

}