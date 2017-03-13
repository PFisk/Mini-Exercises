var textfield;
var button;

function setup() {
  createCanvas(1280, 720);
  //creating input textfield and defining position
  textfield = createInput();
  textfield.position(10, 10);
  //creating button and defining position
  button = createButton("Analyze!");
  button.position(194,10);
  //making it interactive with the mouse
  button.mousePressed(textAnalyze);
  //standard canvas creation setup stuff
  background(70);
  textSize(48);
  fill(255);
  noStroke();
}
function textAnalyze() {
  background(70);
  //The function "getPosTags" outputs an array of tags, which can be used to analyze the input text
  var wordtags = RiTa.getPosTags(textfield.value());
  //Joins the string together and establishes the position of the output
  var tagStr = wordtags.join(" ");
  text(tagStr, 10, 100, width, height);
}