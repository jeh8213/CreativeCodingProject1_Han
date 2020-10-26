num = 1;
birdSpeed = 10;
birdDirection = 1;

//create an array for the stars in the sky
var stars = new Array (251);

//vectors for the shooting star
var position, velocity;

//Mountain objects
let mountainOne;
let mountainTwo;
let mountainThree;
//Ocean object
let oceanView;
//Cloud objects
let cloudOne;
let cloudTwo;


//SETUP
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

  //insert randomized values in the array for the positions of the stars
  for(let s = 0; s < stars.length; s++) {
    stars[s] = random(800);
  }

  //create vectors for the position and velocity of shooting stars
  position = createVector(200, 500);
  velocity = createVector(1, -1);
}


//DRAW
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

  //third time mouse is clicked
  if(num == 3) {
    //change the frame rate so the shooting star moves faster
    frameRate(60);

    //displays night sky
    background(11, 14, 40);

    //displays the entire starry night sky with the shooting star
    shootingStar();
    moon();
    starrySky();
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

//display the stars in the sky
function starrySky() {
  fill(255);
  noStroke();
  for(let b = 0; b < stars.length; b += 2) {
  ellipse(stars[b], stars[b + 1], 2, 2);
  }
}

//display the moon in the sky
function moon() {
  fill(200);
  noStroke();
  ellipse(200, 200, 125, 125);
  fill(11, 14, 40);
  noStroke();
  ellipse(235, 190, 125, 125);
}

//displays the moving shooting star using vectors
function shootingStar() {
  //star moves and leaves a trace behind
  position.add(velocity);
  fill(255);
  noStroke();
  ellipse(position.x, position.y, 10, 10);
  fill(255, 200);
  ellipse(position.x - 2, position.y + 2, 10, 10);
  fill(255, 150);
  ellipse(position.x - 4, position.y + 4, 10, 10);
  fill(255, 100);
  ellipse(position.x - 6, position.y + 6, 10, 10);
  fill(255, 50);
  ellipse(position.x - 8, position.y + 8, 10, 10);
  fill(255, 25);
  ellipse(position.x - 10, position.y + 10, 10, 10);
  fill(255, 10);
  ellipse(position.x - 12, position.y + 12, 10, 10);
  
  //reset the postiion of the shooting star after it moves out of frame
  if(position.x > 800) {
    position.x = -20;
    position.y = 700;
  }
  //display the moon and stars on top 
  //moon();
  //starrySky();
}


//when mouse is pressed num increases by 1 and resets after 3 times
function mousePressed() {
  num++;
  if (num > 3) {
    num = 1;
  }
}