// This sketch is based on two different video tutorials by
// Daniel Shiffman
//
// FFT Analysis: https://youtu.be/2O3nm0Nvbi4
// Blobby:       https://youtu.be/rX5p-QRP6R4


var song;
var fft;
var button;
var slider;
var slider1;

var yoff = 0.0;
var yoff1 = 0.0;

//Button for turning the song on and off
function toggleSong() {
  if (song.isPlaying()) 
  {
    song.pause();
  } else {
    song.play();
  }
}

//Preloading the song, so its ready as the animation starts
function preload() {
  song = loadSound('song1.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  //HSB colormode is used for the animation later
  colorMode(HSB);
  //Button turns song on and off
  button = createButton('❚❚ ►');
  button.mousePressed(toggleSong);
  button.position(15, height-40);
  song.play();

  //The FFT (Fast Fourier Transform) function from the the 
  //p5 sound library is used. This is an algorithm used for
  //analyzing the soundwaves of the sound played
  //value "0.9" is a smoothing value used to make it look better.
  //128 is the amount of individual threads produced by the 
  //algorithm. 
  fft = new p5.FFT(0.9, 128);

  //Slider for how quick the effect fades away
  slider = createSlider(5, 150, 50);
  slider.position(80, height-40);

  //Slider used for the width of the drawn band
  slider1 = createSlider(150, 179, 170);
  slider1.position(220, height-40);
}

function draw() {
  var sliderFade = slider.value();
  var sliderSize = slider1.value();
  noStroke();

  //Making the band fade away delayed
push();
  colorMode(RGB);
  fill(0, sliderFade);
  rect(0, 0, width, height);
pop();

push();
  //Making an array for the values produced by the FFT algorithm
  var spectrum = fft.analyze();
  console.log(spectrum)
  translate(width / 2, height / 2);
  //Setting up the correct values for the band. These values are
  //set to make the band go red when largest (to sample a 
  //conventional equalizer). The bigger the amplitude, the closer
  //to 0 (red) the value gets.
  fill((spectrum[32]*2)*-1 +305, 100, 100);
 
  //Drawing the biggest shape. The shape function is used because 
  //of the ability to address every single part of the shape
  //individually. Makes for interesting shapes and interaction
  var radius = 180;
  beginShape();
  var xoff = 0;
  for (var a = 0; a < spectrum.length; a += 0.02) 
  {
    //A perlin noise map is used here to make the shape "alive"
    var offset = map(noise(xoff, yoff), 0, 1, -50, 50);
    //The size of the shape is responsive to the sound played
    //the specific value of the 32nd value from the array is
    //used, because it worked best with the animation (because 
    //of the difference in the amplitude of the soundwaves). 
    //The larger the soundwave, the bigger the shape gets.
    var r = spectrum[32]+radius/2 + offset;
    var x = r * cos(a);
    var y = r * sin(a);
    //Vertex function is used to close the the shape and make it
    //"whole"
    vertex(x, y);
    xoff += 0.1;
  }
  endShape();

  //The 8th value of the array is used here, to make the noise of 
  //the shape respond to the sound played. A 1/10000 of the original 
  //value is needed for a reasonable effect.
  yoff += spectrum[8]*0.0001;

//A second black shape is drawn on top, to make the illusion of the
//colored shape to be a thin band. Same values except size are used
//here.
fill(0, 100, 0);
    var radius = sliderSize;
  beginShape();
  var xoff = 0;
  for (var a = 0; a < spectrum.length; a += 0.02) 
  {
    var offset = map(noise(xoff, yoff), 0, 1, -50, 50);
    var r = spectrum[32]+radius/2 + offset;
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x, y);
    xoff += 0.1;
  }
  endShape();
  yoff += spectrum[8]*0.0001;
pop();
}
