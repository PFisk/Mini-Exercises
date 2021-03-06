//Defining the global variable used to change color on the throbber
var c = 0;
function setup() {
  console.log("Hi")
  createCanvas(820, 600);
  background(10);
  frameRate(60);
}
function draw() {
    //Drawing the grey circle
    fill(255, 255, 255, 30);
    ellipse(width/2, height/2, 160, 160);
    fill(10, 10, 10);
    ellipse(width/2, height/2, 140, 140);
      fill(10, 80);
      rect(0, 0, width, height);
push();
//Drawing the throbber. "colorMode(HSB)" is used to achieve the rainbow effect.
colorMode(HSB);
 //Variable set to cycle through the hue of the ellipse
 if (c >= 255)  c=0;  else  c++;
    translate(width/2, height/2);
    var cir = 360/60*(frameCount%60);
    rotate(radians(cir));
    noStroke();
    fill(c * 1.5, 255, 255);
    ellipse(0, 75, 50, 10);
pop();
//A second piece is added and rotated a bit, to make the "tail" a bit longer.
push();
colorMode(HSB);
 if (c >= 255)  c=0;  else  c++;
    translate(width/2, height/2);
    var cir = 360/60*(frameCount%60);
    rotate(PI*0.1+radians(cir));
    noStroke();
    fill(c * 1.5, 255, 255);
    ellipse(0, 75, 50, 10);
  pop();
}