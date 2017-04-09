var url;
var drone;
var count = 0;

//Data is preloaded from an external source. We have used "dronestre.am" that provides
//data of incidents where people get killed by drones. 
function preload() {
url = "http://api.dronestre.am/data";
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  //The JSON data is collected from the url, and referred to in the function called "gotData".
  //This particular data needs "padding" to be compatible. Therefore "jsonp" is used.
  loadJSON(url, gotData, 'jsonp');
  //Setting a timeout, to make sure the program starts executing when everything is loaded.
  setTimeout(Interval, 3500);
}

//When the data is ready, this function makes the program draw one object from the array every
//1000 milliseconds. It referres to the function "drawData".
function Interval() {
  setInterval(drawData, 1000);
}

//The data collection happens in this function and logs it to the console.
function gotData(data) {
  drone = data;
  console.log(data);
}

//This makes the skulls fade away over time.
function draw() {
  push();
    fill(0, 5);
    rect(0, 0, width, height);
  pop();
}

//Skulls are drawn here, referring to individual incidents from the dataset used. The size of
//the skulls are mapped to the amount of people killed in the particular incidents.
function drawData() {
     textSize(drone.strike[count].deaths_max * 4);
     text('💀', random(width), random(height));
     //The count variable makes the program cycle through the dataset. When it reaches 645 it 
     //resets to 0
    count++;
      if (count >= 645) {
    count = 0;
  }
  console.log(count);
}