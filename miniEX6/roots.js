var circMax = 2000; //max count of the cirlces
var circCount = 1; //varible counting the amount of circles
var x = new Array(circMax); //array for x location
var y = new Array(circMax); //array for y location
var r = new Array(circMax); //radius of the circle

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(45);
  colorMode(HSB);
}

//"branches" are created at the press of the mouse
function mouseReleased() {
  x[0] = mouseX;
  y[0] = mouseY;
  r[0] = 0;
  ellipse(mouseX, mouseY, 15, 15);
}

function draw() {
  strokeWeight(0.5);

  //creating random parameters for the generation
  var newR = random(2, 7); //circle radius
  var newX = random(0+newR, width-newR); //random x location
  var newY = random(0+newR, height-newR); //random y location

  //index for location measuring
  var closestDist = 100000;
  var closestIndex = 0;

  //measuring which circle is the closest
  for (var i=0; i < circCount; i++) {
    var newDist = dist(newX,newY, x[i],y[i]);
    if (newDist < closestDist) {
      closestDist = newDist;
      closestIndex = i; 
    } 
  }

  //alining the circles to the closest circle outline
  var angle = atan2(newY-y[closestIndex], newX-x[closestIndex]);

  //calculating the location and size with the new angle
  x[circCount] = x[closestIndex] + cos(angle) * 1.2 * (r[closestIndex]+newR);
  y[circCount] = y[closestIndex] + sin(angle) * 1.2 * (r[closestIndex]+newR);
  r[circCount] = newR;
  //making the program count the amount of drawn circles
  circCount++;
   
  //drawing the circles
  for (var i=0 ; i < circCount; i++) {
    fill(130, 120-i*0.07, 100); //the fill effect is calculated to last approx. 2000 frames 
    ellipse(x[i],y[i], r[i]*2,r[i]*2); //the circles gets information for the earlier defined arrays
  }
  
  //when 2000 circles are drawn, the program stops. This limit is set due to p5js bad performance.
  //the program is already slow at the end, so to keep making more would essentially grind the browser
  //to a complete halt.
  if (circCount >= circMax) noLoop();
}