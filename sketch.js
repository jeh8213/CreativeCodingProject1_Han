let num = 1;
let birdSpeed = 10;
let birdDirection = 1;

//Mountain objects
let mountainOne;
let mountainTwo;
let mountainThree;
//Ocean object
let oceanView;
//Cloud objects
let cloudOne;
let cloudTwo;

function setup() {
  createCanvas(800, 800);
  //initiate variables for clouds
  xpos = 10;
  xposTwo = 400;
  //call Mountain bjects, three mountains at different positions
  mountainOne = new Mountain(0, 450, 220, 235);
  mountainTwo = new Mountain(500, 450, 220, 235);
  mountainThree = new Mountain(200, 400, 235, 245);
  //call Ocean object
  oceanView = new Ocean();
  //call Cloud objects, two clouds at different loacations
  cloudOne = new Cloud(xpos, 210);
  cloudTwo = new Cloud(xposTwo, 230);
}

function draw() {
  //first time the mouse is clicked
  if(num == 1) {
  frameRate(50);
  //sky
  background(164, 211, 247);
  //display the three mountains
  mountainOne.display();
  mountainTwo.display();
  mountainThree.display();
  //draw the sun at the top left corner of the window
  fill(255, 255, 155);
  ellipse(70, 70, 60, 60);

  //display the clouds
  cloudOne.display();
  cloudTwo.display();
  //move clouds slowly to towards the right side of the screen
  cloudOne.move();
  cloudTwo.move();
  
  }
  
  //second time mouse is clicked
  if(num == 2) {
    //display the sky
    fill(175, 217, 239);
    noStroke();
    rect(0, 0, 800, 500);
    //display the sun
    fill(249, 224, 160);
    noStroke();
    ellipse(width/2, 500, 325, 325);
    //display the ocean
    oceanView.display();
    //add shimmer to ocean, several to add a more shimmer effect
    oceanView.shimmer();
    oceanView.shimmer();
    oceanView.shimmer();
    oceanView.shimmer();
    oceanView.shimmer();
    oceanView.shimmer();
    oceanView.shimmer();
    //display birds and have them move 
    birdMove();
  }
}


//display one bird
function bird(xBird, yBird) {
  //default for xBird and yBird is 30
  stroke(0);
  strokeWeight(3);
  strokeJoin(ROUND);
  line(xBird, yBird, xBird + 10, yBird + 10);
  line(xBird + 10, yBird + 10, xBird, yBird + 20);
}

//display a flock of birds
function birdFlock() {
  for(let j = 30; j <= 200; j += 35) {
    for(let i = 30; i <= j; i += 35) {
      bird(i, j);
    }
  }
}

//have the birds move to the right, slightly moving downwards
function birdMove() {
  push();
  translate(birdSpeed, birdDirection);
  scale(0.8);
  birdFlock();
  birdSpeed += 5;
  birdDirection += 0.8;
  pop();
  //loop bird moving
  if(birdSpeed > 800) {
    birdSpeed = -150;
    birdDirection = 0;
  }
  
}

//when mouse is pressed num increases by 1 and resets after 3 times
function mousePressed() {
  num++;
  if (num > 3) {
    num = 1;
  }
}