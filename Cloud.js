class Cloud {
	constructor(cloudPos, cloudOpacity) {
    this.cloudPos = cloudPos;
    this.cloudOpacity = cloudOpacity;
    this.cloudSpeed = 1;
	}

//display the clouds
display() {
  //clouds have rounded edges with low opacity
  fill(255, 255, 255, this.cloudOpacity);
  stroke(255, 255, 255, this.cloudOpacity);
  strokeWeight(20);
  strokeJoin(ROUND);
  beginShape();
  vertex(this.cloudPos, 150);
  vertex(this.cloudPos + 10, 135);
  vertex(this.cloudPos + 25, 140);
  vertex(this.cloudPos + 45, 120);
  vertex(this.cloudPos + 65, 130);
  vertex(this.cloudPos + 90, 105);
  vertex(this.cloudPos + 115, 130);
  vertex(this.cloudPos + 140, 125);
  vertex(this.cloudPos + 160, 140);
  vertex(this.cloudPos + 180, 135);
  vertex(this.cloudPos + 200, 150);
  vertex(this.cloudPos, 150);
  endShape();
}

//move the clouds to the right and reset when they are out of frame
move() {
  this.cloudPos = this.cloudPos + this.cloudSpeed;
  //when clouds move out of window, respawn another cloud
  if(this.cloudPos > width) {
    this.cloudPos = -200;
  }
}

}