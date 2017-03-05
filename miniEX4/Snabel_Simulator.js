//starting coordinates for the ellipse
var x = 250;
var y = 100;
//defining horizontal speed
var xSpeed = 6;
//defining vertical starting speed
var ySpeed = 0;
//defing the acceleration of the ellipse
var gravity = 0.1;

//default value for (HSB) color cycling. 0 = red
var c = 0;

//defining slider for scaling + default value
var ScaleLoopingSlider;
var ScaleLoop = 0;

//setting up canvas and defining slider + slidervalues
function setup() {
  createCanvas(innerWidth, innerHeight)
  background(30)
  ScaleLoopingSlider = createSlider(5*1, 30*10, 25);
  ScaleLoopingSlider.position(innerWidth/2 - 70, innerHeight/2 + 340);
}

//drawing all pre-defined functions
function draw() {
  Gravity();
  Animation();
  FrameBorder(); 
  FrameBorderCleaner();
  Controls();
  Interaction();
}

function Animation() {
   push();
   var SLS = ScaleLoopingSlider.value();
   //responsive location of the "frame" where the animation is playing
  translate(innerWidth/2 - 300, innerHeight/2 - 300);
  colorMode(HSB);

  //defining rainbow colorcycling with the (HSB) colormode, and speed of the colorcycling
  //one cycle are ~50 seconds with these settings
  //the variable "c" goes towards the value of 3600. If it reaches the value, it resets to 0
  colorMode(HSB);
  c = c + 0.1;
  if (c >= 3600)  c=0;  else  c++;
  fill(c*0.1, 255, 255);

  //defining the scaling of the ellipse
  ScaleLoop = ScaleLoop + 0.1;
  //same "if statement" as used in the color cycling is used here. If the value hits the
  //value defined by the scaling slider (the variable "SLS"), it will reset to 0.
  if (ScaleLoop >= SLS)  ScaleLoop=0;  else  ScaleLoop++;
  ellipse(x, y, ScaleLoop, ScaleLoop);
  pop();
}

//creates the frame for the animation
function FrameBorder() {
  push();
  translate(innerWidth/2, innerHeight/2);
  noFill();
  stroke(255);
  strokeWeight(10);
  rect(-300, -300, 600, 600);
  pop();
}

//by scaling the ellipse up to much, it creates ellipses through the frame. This
//function cleans it up
function FrameBorderCleaner() {
  push();
  translate(innerWidth/2, innerHeight/2);
  noFill();
  stroke(30);
  strokeWeight(200);
  rect(-405, -405, 810, 810);
  pop();
}

//defing the gravity for the ellipse
function Gravity() {

  if (x+xSpeed <= 0) {
    xSpeed *= -1;
  }
  //if the horizontal movement reaches the frame, it will reverse direction
  else if (x + xSpeed >= 600) {
    xSpeed *= -1;
  }
  //if the vertical movement reaches bottom of the frame, it will reverse direction
  if (y+ySpeed <= 0 ) {
    ySpeed *= -1;
  }
  
  //if the vertical location is everywhere but the bottom, it will be affected by
  //the defined amount of gravity
  else if (y + ySpeed >= 600) {
    if (ySpeed < gravity) {
      ySpeed = 0;
      gravity = 0;
    }
    else{
      ySpeed *= -1;
    }
  }

  ySpeed += gravity;

  x += xSpeed;
  y += ySpeed;
}

//defining controls for interaction for the animation
function keyPressed() {   
  //when "C" is pressed, it erases everything the animation has drawn (basically draws
  //a black rectangle filling the entire document)
  if (keyCode == 67) {    
    fill(30);
    rect(0,0,width, height);
 };  
 //when "F" is pressed, it freezes the frame (actually moves the location of the 
  //y-coordinate outside the frame for the animation, and therefore cant be seen anymore)
    if (keyCode == 70) {
    y = y + 650;
 };
}

//defining controls for interaction for the animation
function Interaction() {
  //increases speed
  if (keyIsDown(UP_ARROW)) {
    y = y - 1
  };
  //decreases speed
  if (keyIsDown(DOWN_ARROW)) {
    y = y + 1
  };
}

//mouse-over function to see controls for the animation
function Controls() {
  push();
  //defining location for mouse coordinates to show the text
  //(when the mouse is located inside the frame)
  if (mouseX>innerWidth/2 - 300 && mouseX<innerWidth/2 + 300 && mouseY>innerHeight/2 - 300 && mouseY<innerHeight/2 + 300) {
    textSize (28);
    fill(50, 50, 50);
  //draws text underneath the frame 
    text("Slide to change scaling", innerWidth/2 - 160, innerHeight/2 + 390);
    text("Hold   '↑' or '↓'  to change speed", innerWidth/2 - 160, innerHeight/2 + 420);
    text("Press 'C' to clean", innerWidth/2 - 160, innerHeight/2 + 450);
    text("Press 'F' when satisfied", innerWidth/2 - 160, innerHeight/2 + 480);
  pop();
  }
} 