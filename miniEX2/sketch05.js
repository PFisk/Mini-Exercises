function setup() {
  createCanvas(1920,1080, WEBGL);
  console.log("Console says hi");
}
function draw(){
  //Makes the cursor a cross
  cursor(CROSS);  
  //Making the light engine respond to the mouse position
  var locY = (mouseY / height - 0.5) * (-2);
  var locX = (mouseX / width - 0.5) * 2;

  pointLight(150, 150, 150, locX, locY, 0);
  //Draws the center sphere
  fill(10, 10, 10)
  sphere(50);
   //Camera settings making the object float around
  if (mouseIsPressed) {
    camera(-mouseX+960, -mouseY+540, 0);
    //Defining spot for glitchiness
    if (mouseX>930 && mouseX<990 && mouseY>490 && mouseY<560) {  
      //All the objects in the glitch
      push();
      rotateY(frameCount * 0.01);
      rotateX(frameCount * 0.01);
      normalMaterial(0);
      sphere(1000);
      pop();

      rotateY(frameCount * 0.01);
      rotateX(frameCount * 0.03);
      rotateZ(frameCount * 0.01);
      normalMaterial(0);
      scale(sin(frameCount * 0.02));
      box(10, 250, 200);

      rotateY(frameCount * 0.01);
      rotateX(frameCount * 0.01);
      rotateZ(frameCount * 0.03);
      normalMaterial(0);
      scale(-cos(frameCount * 0.04));
      cone(150, 250);

      rotateY(frameCount * 0.01);
      rotateX(frameCount * 0.2);
      rotateZ(frameCount * 0.2);
      normalMaterial(0);
      scale(tan(frameCount * 0.001 + 10));
      torus(250, 50);

      normalMaterial(0);
      box(20, 1150, 20);

      rotateY(frameCount * 0.01);
      rotateX(frameCount * 0.2);
      rotateZ(frameCount * 0.2);
      normalMaterial(0);
      torus(250, 50);

      normalMaterial(0);
      box(20, 1150, 20);

      translate(200, 200, 0);
      normalMaterial(0);
      box(20, 1150, 20);

      translate(400, 200, 0);
      normalMaterial(0);
      sphere(50);

      translate(-700, -600, 100);
      normalMaterial(0);
      box(200, 200, 200);

      translate(0, 200, 400);
      normalMaterial(0);
      cone(200, 50);

      translate(100, 0, -500);
      normalMaterial(0);
      sphere(10);
    }
  } else {
    //Making the camera movement simulate orbit
    camera(cos(frameCount * 0.01) * 500, sin(frameCount * 0.01) * 300 + 100, sin(frameCount * 0.01) * 600 + 300);
  }   
  //Center sphere in spinning object
  ambientLight(255, 0, 0);
  rotateX(frameCount * 0.005);
  rotateZ(frameCount * 0.005);
  sphere(30);
  //Smallest torus
  ambientLight(0, 30, 0);
  rotateX(frameCount * 0.05 + 300);
  rotateZ(frameCount * 0.05);
  torus(90, 10);
  //Middle torus
  ambientLight(0, 20, 0);
  rotateX(frameCount * -0.03);
  rotateZ(frameCount * -0.03);
  torus(110, 10);
  //Biggest torus
  ambientLight(0, 20, 0);
  rotateY(frameCount * 0.03 + 300);
  rotateX(frameCount * 0.0);
  rotateZ(frameCount * 0.0);
  torus(130, 10);
}