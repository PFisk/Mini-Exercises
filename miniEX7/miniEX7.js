//loads of variables used for different things throughout the program

var button0 = [];
var button1 = [];

var sungrid0 = [];
var sungrid1 = [];
var sungrid2 = [];
var sungrid3 = [];
var sungrid4 = [];
var sungrid5 = [];
var sungrid6 = [];
var sungridside0 = [];
var sungridside1 = [];
var sungridside2 = [];
var sungridside3 = [];
var sunbeam1 = [];
var sunbeam2 = [];
var sunbeam3 = [];
var sunbeam4 = [];
var sunbeam5 = [];

var sliders = [];
var angle = 0;

var palmleaves = [];
var p = 0;
var lmod1 = 0;
var lmod2 = 0;
var lmod3 = 0;
var lmod4 = 0;
var lmod5 = 0;
var lmod6 = 0;

var trunk = [];
var j = 0;

var y = 0;
var x = 0;

var x1 = 0;
var y1 = 0;

var x2 = 0;
var y2 = 0;

var x3 = 0;
var y3 = 0;

var c = 0;
var k = 0;

var sunswitch = [];
var lmodswitch = [];
var l = 0;

//setting up the program. The order of things loaded in "setup" is important,
//because of different overlapping and syntax reasons
function setup() {
  createCanvas(1280, 720);
  background(75);

  //framerate is turned down a notch, to make for a slower wavy motion

  frameRate(30);
  Sliders();
  Buttons();

  //the switches for the sun and for the palm located in bottom left corner
  sunswitch[c] = createCheckbox('');
  sunswitch[c].position(40, 680);
  lmodswitch[l] = createCheckbox('');
  lmodswitch[l].position(100, 680);
  Trunk();
  PalmSource();
  Sungrids();
}

function draw() {

  //every moving part of the sketch is put in draw
  Sunswitch();
  Palm();
  background(75);

  //for loop used for the slider motion
    var offset =0; 
    for(var i=0; i<sliders.length; i++){
    var x = map(sin(angle+offset), -1, 1, 0, 255); 
    sliders[i].value(x);  
    offset += 0.3; 
    }
    angle +=0.1;  
}

function Sliders() {
  //intial values for slider animation, and amount of total sliders

        for(var i=0; i<70; i++){ 
    sliders[i] = createSlider(0, 1280, 150);  
        sliders[i].style("width", "200px"); 
        sliders[i].style('rotate', -90); 
        sliders[i].position(-82+i*18, 400);
}
}

function Buttons() {
  //really just "walls" for the controls in bottom left corner

  button0[k] = createButton('');
  button0[k].position(0, 650);
  button0[k].size(160, 10);
  button0[k] = createButton('');
  button0[k].position(160, 650);
  button0[k].size(10, 70);
}

function Trunk() {
//the trunk of the palm is drawn from the top to bottom, to make sure overlapping
//of the buttons is correct


    //top

  trunk[j] = createButton('');
  trunk[j].position(1030, 190);
  trunk[j].size(20, 20);
  trunk[j] = createButton('');
  trunk[j].position(1070, 190);
  trunk[j].size(20, 20);
  trunk[j] = createButton('');
  trunk[j].position(1050, 170);
  trunk[j].size(20, 20);
  trunk[j] = createButton('');
  trunk[j].position(1050, 210);
  trunk[j].size(20, 20);
  trunk[j] = createButton('');
  trunk[j].position(1040, 180);
  trunk[j].size(40, 40);

  //bottom

  trunk[j] = createButton('');
  trunk[j].position(1070, 210);
  trunk[j].size(38, 38);
  trunk[j] = createButton('');
  trunk[j].position(1088, 240);
  trunk[j].size(38, 38);
  trunk[j] = createButton('');
  trunk[j].position(1102, 270);
  trunk[j].size(38, 38);
  trunk[j] = createButton('');
  trunk[j].position(1110, 300);
  trunk[j].size(38, 38);
  trunk[j] = createButton('');
  trunk[j].position(1117, 330);
  trunk[j].size(38, 38);
  trunk[j] = createButton('');
  trunk[j].position(1121, 360);
  trunk[j].size(38, 38);
  trunk[j] = createButton('');
  trunk[j].position(1123, 390);
  trunk[j].size(38, 38);
  trunk[j] = createButton('');
  trunk[j].position(1120, 420);
  trunk[j].size(38, 38);
  trunk[j] = createButton('');
  trunk[j].position(1115, 450);
  trunk[j].size(38, 38);
  trunk[j] = createButton('');
  trunk[j].position(1108, 480);
  trunk[j].size(38, 38);
  trunk[j] = createButton('');
  trunk[j].position(1100, 510);
  trunk[j].size(38, 38);
  trunk[j] = createButton('');
  trunk[j].position(1092, 542);
  trunk[j].size(38, 38);
  trunk[j] = createButton('');
  trunk[j].position(1098, 563);
  trunk[j].size(20, 20);
  trunk[j] = createButton('');
  trunk[j].position(1114, 576);
  trunk[j].size(20, 20);
  trunk[j] = createButton('');
  trunk[j].position(1120, 586);
  trunk[j].size(20, 20);
  trunk[j] = createButton('');
  trunk[j].position(1090, 576);
  trunk[j].size(20, 20);
  trunk[j] = createButton('');
  trunk[j].position(1080, 586);
  trunk[j].size(20, 20);  
  trunk[j] = createButton('');
  trunk[j].position(1100, 585);
  trunk[j].size(20, 20);
}

function PalmSource() {
  //making an array for the palm leaves. This way i could check all the checkboxes
  //at once. Every element is created off canvas, and simply moved in place. While
  //being very dumb and primitive, this solution was better than my multiple loop
  //solution for the sun found further below

for (p=0;p<198; p++){
 palmleaves[p] = createCheckbox();
 palmleaves[p].position(1000+p*2, -200);
 palmleaves[p].checked(true);
}
}

function Palm() {
  //making different modifiers for the branches and connecting them to the switch

  //branch 1 modifier

  if (lmodswitch[0].checked()) {
    lmod1 = random(-1, 1);
  } else {
    lmod1 = 0;
  }

  if (lmodswitch[0].checked()) {
    lmod2 = random(-1, 4);
  } else {
    lmod2 = 0;
  }
  
  //branch 2 modifier

  if (lmodswitch[0].checked()) {
    lmod3 = random(-2, 4);
  } else {
    lmod3 = 0;
  }

  if (lmodswitch[0].checked()) {
    lmod4 = random(-1, 1);
  } else {
    lmod4 = 0;
  }

  //branch 3 modifier

  if (lmodswitch[0].checked()) {
    lmod5 = random(-1, 1);
  } else {
    lmod5 = 0;
  }

  if (lmodswitch[0].checked()) {
    lmod6 = random(-4, 1);
  } else {
    lmod6 = 0;
  }

//palm branch 1
palmleaves[0].position(997+lmod1, 200+lmod2);
palmleaves[1].position(987+lmod1, 210+lmod2);
palmleaves[2].position(980+lmod1, 220+lmod2);
palmleaves[3].position(973+lmod1, 232+lmod2);
palmleaves[4].position(967+lmod1, 243+lmod2);
palmleaves[5].position(963+lmod1, 255+lmod2);
palmleaves[6].position(960+lmod1, 266+lmod2);
palmleaves[7].position(958+lmod1, 278+lmod2);
palmleaves[8].position(957+lmod1, 290+lmod2);
palmleaves[9].position(957+lmod1, 301+lmod2);
palmleaves[10].position(958+lmod1, 312+lmod2);
palmleaves[11].position(960+lmod1, 324+lmod2);
palmleaves[12].position(963+lmod1, 337+lmod2);
palmleaves[13].position(968+lmod1, 350+lmod2);
palmleaves[14].position(992+lmod1, 367+lmod2);
palmleaves[15].position(974+lmod1, 363+lmod2);
palmleaves[16].position(991+lmod1, 350+lmod2);
palmleaves[17].position(989+lmod1, 337+lmod2);
palmleaves[18].position(988+lmod1, 324+lmod2);
palmleaves[19].position(987+lmod1, 314+lmod2);
palmleaves[20].position(988+lmod1, 303+lmod2);
palmleaves[21].position(989+lmod1, 292+lmod2);
palmleaves[22].position(992+lmod1, 281+lmod2);
palmleaves[23].position(996+lmod1, 270+lmod2);
palmleaves[24].position(1001+lmod1, 259+lmod2);
palmleaves[25].position(1007+lmod1, 248+lmod2);
palmleaves[26].position(1016+lmod1, 237+lmod2);
palmleaves[27].position(1025+lmod1, 226+lmod2);
palmleaves[28].position(1038+lmod1, 215+lmod2);

//palm branch 2

palmleaves[29].position(1014+lmod3, 193+lmod4);
palmleaves[30].position(1000+lmod3, 182+lmod4);
palmleaves[31].position(986+lmod3, 179+lmod4);
palmleaves[32].position(973+lmod3, 178+lmod4);
palmleaves[33].position(960+lmod3, 179+lmod4);
palmleaves[34].position(947+lmod3, 181+lmod4);
palmleaves[35].position(933+lmod3, 183+lmod4);
palmleaves[36].position(920+lmod3, 187+lmod4);
palmleaves[37].position(908+lmod3, 192+lmod4);
palmleaves[38].position(895+lmod3, 198+lmod4);
palmleaves[39].position(883+lmod3, 205+lmod4);
palmleaves[40].position(870+lmod3, 214+lmod4);
palmleaves[41].position(857+lmod3, 222+lmod4);
palmleaves[42].position(845+lmod3, 233+lmod4);
palmleaves[43].position(832+lmod3, 246+lmod4);
palmleaves[44].position(822+lmod3, 259+lmod4);
palmleaves[45].position(815+lmod3, 274+lmod4);
palmleaves[46].position(808+lmod3, 290+lmod4);
palmleaves[47].position(802+lmod3, 272+lmod4);
palmleaves[48].position(804+lmod3, 258+lmod4);
palmleaves[49].position(808+lmod3, 246+lmod4);
palmleaves[50].position(813+lmod3, 234+lmod4);
palmleaves[51].position(818+lmod3, 222+lmod4);
palmleaves[52].position(824+lmod3, 210+lmod4);
palmleaves[53].position(830+lmod3, 198+lmod4);
palmleaves[54].position(837+lmod3, 186+lmod4);
palmleaves[55].position(844+lmod3, 176+lmod4);
palmleaves[56].position(852+lmod3, 168+lmod4);
palmleaves[57].position(860+lmod3, 161+lmod4);
palmleaves[58].position(870+lmod3, 154+lmod4);
palmleaves[59].position(881+lmod3, 148+lmod4);
palmleaves[60].position(892+lmod3, 143+lmod4);
palmleaves[61].position(903+lmod3, 137+lmod4);
palmleaves[62].position(915+lmod3, 133+lmod4);
palmleaves[63].position(927+lmod3, 130+lmod4);
palmleaves[64].position(939+lmod3, 127+lmod4);
palmleaves[65].position(951+lmod3, 125+lmod4);
palmleaves[66].position(963+lmod3, 125+lmod4);
palmleaves[67].position(975+lmod3, 125+lmod4);
palmleaves[68].position(987+lmod3, 126+lmod4);
palmleaves[69].position(999+lmod3, 129+lmod4);
palmleaves[70].position(1010+lmod3, 133+lmod4);
palmleaves[71].position(1021+lmod3, 137+lmod4);
palmleaves[72].position(1030+lmod3, 141+lmod4);
palmleaves[73].position(1040+lmod3, 146+lmod4);
palmleaves[74].position(1050+lmod3, 152+lmod4);
palmleaves[75].position(1060+lmod3, 159+lmod4);

//palm branch 3

palmleaves[76].position(1065+lmod5, 143+lmod6);
palmleaves[77].position(1068+lmod5, 130+lmod6);
palmleaves[78].position(1072+lmod5, 119+lmod6);
palmleaves[79].position(1078+lmod5, 108+lmod6);
palmleaves[81].position(1084+lmod5, 97+lmod6);
palmleaves[82].position(1094+lmod5, 85+lmod6);
palmleaves[83].position(1102+lmod5, 76+lmod6);
palmleaves[84].position(1110+lmod5, 67+lmod6);
palmleaves[85].position(1119+lmod5, 59+lmod6);
palmleaves[86].position(1130+lmod5, 53+lmod6);
palmleaves[87].position(1141+lmod5, 49+lmod6);
palmleaves[88].position(1152+lmod5, 47+lmod6);
palmleaves[89].position(1164+lmod5, 48+lmod6);
palmleaves[90].position(1176+lmod5, 51+lmod6);
palmleaves[91].position(1186+lmod5, 58+lmod6);
palmleaves[92].position(1196+lmod5, 66+lmod6);
palmleaves[93].position(1202+lmod5, 77+lmod6);
palmleaves[94].position(1196+lmod5, 87+lmod6);
palmleaves[95].position(1188+lmod5, 79+lmod6);
palmleaves[96].position(1176+lmod5, 78+lmod6);
palmleaves[97].position(1164+lmod5, 79+lmod6);
palmleaves[98].position(1152+lmod5, 83+lmod6);
palmleaves[99].position(1140+lmod5, 89+lmod6);
palmleaves[100].position(1128+lmod5, 100+lmod6);
palmleaves[101].position(1117+lmod5, 111+lmod6);
palmleaves[102].position(1110+lmod5, 122+lmod6);
palmleaves[103].position(1104+lmod5, 133+lmod6);
palmleaves[104].position(1098+lmod5, 144+lmod6);
palmleaves[105].position(1093+lmod5, 155+lmod6);
palmleaves[106].position(1088+lmod5, 166+lmod6);
palmleaves[107].position(1085+lmod5, 177+lmod6);
}

function Sungrids() {
  //making the sun from multiple arrays

  for (x=0;x<7; x++){ 
    sungrid0[x] = createCheckbox();
    sungrid0[x].position(50+x*15, 50+y*15);
    }

  for (x=0;x<7; x++){ 
    sungrid1[x] = createCheckbox();
    sungrid1[x].position(50+x*15, 65+y*15);
    }
  
  for (x=0;x<7; x++){ 
    sungrid2[x] = createCheckbox();
    sungrid2[x].position(50+x*15, 80+y*15);
    }

    for (x=0;x<7; x++){ 
    sungrid3[x] = createCheckbox();
    sungrid3[x].position(50+x*15, 95+y*15);
    }

    for (x=0;x<7; x++){ 
    sungrid4[x] = createCheckbox();
    sungrid4[x].position(50+x*15, 110+y*15);
    }

    for (x=0;x<7; x++){ 
    sungrid5[x] = createCheckbox();
    sungrid5[x].position(50+x*15, 125+y*15);
    }

    for (x=0;x<7; x++){ 
    sungrid6[x] = createCheckbox();
    sungrid6[x].position(50+x*15, 140+y*15);
    }

    //Sides of the sun

    for (y1=0;y1<5; y1++){ 
    sungridside0[y1] = createCheckbox();
    sungridside0[y1].position(35+x1*15, 65+y1*15);
    }

    for (x2=0;x2<5; x2++){ 
    sungridside1[x2] = createCheckbox();
    sungridside1[x2].position(65+x2*15, 35+y2*15);
    }

    for (y1=0;y1<5; y1++){ 
    sungridside2[y1] = createCheckbox();
    sungridside2[y1].position(155+x1*15, 65+y1*15);
    }

    for (x2=0;x2<5; x2++){ 
    sungridside3[x2] = createCheckbox();
    sungridside3[x2].position(65+x2*15, 155+y2*15);
    }

    //Sunbeams

    for (x3=0;x3<5; x3++){ 
    sunbeam1[x3] = createCheckbox();
    sunbeam1[x3].position(90+x3*7, 196+x3*3*11);
    }

    for (x3=0;x3<5; x3++){ 
    sunbeam2[x3] = createCheckbox();
    sunbeam2[x3].position(135+x3*11, 190+x3*3*7);
    }

    for (x3=0;x3<5; x3++){ 
    sunbeam3[x3] = createCheckbox();
    sunbeam3[x3].position(168+x3*24, 170+x3*24);
    }

    for (x3=0;x3<5; x3++){ 
    sunbeam4[x3] = createCheckbox();
    sunbeam4[x3].position(185+x3*21.9, 140+x3*9.2);
    }

    for (x3=0;x3<5; x3++){ 
    sunbeam5[x3] = createCheckbox();
    sunbeam5[x3].position(190+x3*36.2, 105+x3*6);
    }
}

function Sunswitch() {
    //making switches for the sun, so i can check and un-check it

      if (sunswitch[0].checked()) {
    sungrid0[0].checked(true);
    sungrid0[1].checked(true);
    sungrid0[2].checked(true);
    sungrid0[3].checked(true);
    sungrid0[4].checked(true);
    sungrid0[5].checked(true);
    sungrid0[6].checked(true);
    } else {
    sungrid0[0].checked(false);
    sungrid0[1].checked(false);
    sungrid0[2].checked(false);
    sungrid0[3].checked(false);
    sungrid0[4].checked(false);
    sungrid0[5].checked(false);
    sungrid0[6].checked(false);
   }
      if (sunswitch[0].checked()) {
    sungrid1[0].checked(true);
    sungrid1[1].checked(true);
    sungrid1[2].checked(true);
    sungrid1[3].checked(true);
    sungrid1[4].checked(true);
    sungrid1[5].checked(true);
    sungrid1[6].checked(true);
   } else {
    sungrid1[0].checked(false);
    sungrid1[1].checked(false);
    sungrid1[2].checked(false);
    sungrid1[3].checked(false);
    sungrid1[4].checked(false);
    sungrid1[5].checked(false);
    sungrid1[6].checked(false);
    }
        if (sunswitch[0].checked()) {
    sungrid2[0].checked(true);
    sungrid2[1].checked(true);
    sungrid2[2].checked(true);
    sungrid2[3].checked(true);
    sungrid2[4].checked(true);
    sungrid2[5].checked(true);
    sungrid2[6].checked(true);
    } else {
    sungrid2[0].checked(false);
    sungrid2[1].checked(false);
    sungrid2[2].checked(false);
    sungrid2[3].checked(false);
    sungrid2[4].checked(false);
    sungrid2[5].checked(false);
    sungrid2[6].checked(false);
    }
        if (sunswitch[0].checked()) {
    sungrid3[0].checked(true);
    sungrid3[1].checked(true);
    sungrid3[2].checked(true);
    sungrid3[3].checked(true);
    sungrid3[4].checked(true);
    sungrid3[5].checked(true);
    sungrid3[6].checked(true);
   } else {
    sungrid3[0].checked(false);
    sungrid3[1].checked(false);
    sungrid3[2].checked(false);
    sungrid3[3].checked(false);
    sungrid3[4].checked(false);
    sungrid3[5].checked(false);
    sungrid3[6].checked(false);
    }
        if (sunswitch[0].checked()) {
    sungrid4[0].checked(true);
    sungrid4[1].checked(true);
    sungrid4[2].checked(true);
    sungrid4[3].checked(true);
    sungrid4[4].checked(true);
    sungrid4[5].checked(true);
    sungrid4[6].checked(true);
    } else {
    sungrid4[0].checked(false);
    sungrid4[1].checked(false);
    sungrid4[2].checked(false);
    sungrid4[3].checked(false);
    sungrid4[4].checked(false);
    sungrid4[5].checked(false);
    sungrid4[6].checked(false);
    }
        if (sunswitch[0].checked()) {
    sungrid5[0].checked(true);
    sungrid5[1].checked(true);
    sungrid5[2].checked(true);
    sungrid5[3].checked(true);
    sungrid5[4].checked(true);
    sungrid5[5].checked(true);
    sungrid5[6].checked(true);
    } else {
    sungrid5[0].checked(false);
    sungrid5[1].checked(false);
    sungrid5[2].checked(false);
    sungrid5[3].checked(false);
    sungrid5[4].checked(false);
    sungrid5[5].checked(false);
    sungrid5[6].checked(false);
    }
        if (sunswitch[0].checked()) {
    sungrid6[0].checked(true);
    sungrid6[1].checked(true);
    sungrid6[2].checked(true);
    sungrid6[3].checked(true);
    sungrid6[4].checked(true);
    sungrid6[5].checked(true);
    sungrid6[6].checked(true);
   } else {
    sungrid6[0].checked(false);
    sungrid6[1].checked(false);
    sungrid6[2].checked(false);
    sungrid6[3].checked(false);
    sungrid6[4].checked(false);
    sungrid6[5].checked(false);
    sungrid6[6].checked(false);
    }

    //Sides of the sun

    if (sunswitch[0].checked()) {
    sungridside0[0].checked(true);
    sungridside0[1].checked(true);
    sungridside0[2].checked(true);
    sungridside0[3].checked(true);
    sungridside0[4].checked(true);
    } else {
    sungridside0[0].checked(false);
    sungridside0[1].checked(false);
    sungridside0[2].checked(false);
    sungridside0[3].checked(false);
    sungridside0[4].checked(false);
    }
    if (sunswitch[0].checked()) {
    sungridside1[0].checked(true);
    sungridside1[1].checked(true);
    sungridside1[2].checked(true);
    sungridside1[3].checked(true);
    sungridside1[4].checked(true);
    } else {
    sungridside1[0].checked(false);
    sungridside1[1].checked(false);
    sungridside1[2].checked(false);
    sungridside1[3].checked(false);
    sungridside1[4].checked(false);
    }
      if (sunswitch[0].checked()) {
    sungridside2[0].checked(true);
    sungridside2[1].checked(true);
    sungridside2[2].checked(true);
    sungridside2[3].checked(true);
    sungridside2[4].checked(true);
    } else {
    sungridside2[0].checked(false);
    sungridside2[1].checked(false);
    sungridside2[2].checked(false);
    sungridside2[3].checked(false);
    sungridside2[4].checked(false);
    }
      if (sunswitch[0].checked()) {
    sungridside3[0].checked(true);
    sungridside3[1].checked(true);
    sungridside3[2].checked(true);
    sungridside3[3].checked(true);
    sungridside3[4].checked(true);
    } else {
    sungridside3[0].checked(false);
    sungridside3[1].checked(false);
    sungridside3[2].checked(false);
    sungridside3[3].checked(false);
    sungridside3[4].checked(false);
    }

  //Sunbeams

    if (sunswitch[0].checked()) {
    sunbeam1[0].checked(true);
    sunbeam1[1].checked(true);
    sunbeam1[2].checked(true);
    sunbeam1[3].checked(true);
    sunbeam1[4].checked(true);
    } else {
    sunbeam1[0].checked(false);
    sunbeam1[1].checked(false);
    sunbeam1[2].checked(false);
    sunbeam1[3].checked(false);
    sunbeam1[4].checked(false);
    }

      if (sunswitch[0].checked()) {
    sunbeam2[0].checked(true);
    sunbeam2[1].checked(true);
    sunbeam2[2].checked(true);
    sunbeam2[3].checked(true);
    sunbeam2[4].checked(true);
    } else {
    sunbeam2[0].checked(false);
    sunbeam2[1].checked(false);
    sunbeam2[2].checked(false);
    sunbeam2[3].checked(false);
    sunbeam2[4].checked(false);
    }

      if (sunswitch[0].checked()) {
    sunbeam3[0].checked(true);
    sunbeam3[1].checked(true);
    sunbeam3[2].checked(true);
    sunbeam3[3].checked(true);
    sunbeam3[4].checked(true);
    } else {
    sunbeam3[0].checked(false);
    sunbeam3[1].checked(false);
    sunbeam3[2].checked(false);
    sunbeam3[3].checked(false);
    sunbeam3[4].checked(false);
    }

      if (sunswitch[0].checked()) {
    sunbeam4[0].checked(true);
    sunbeam4[1].checked(true);
    sunbeam4[2].checked(true);
    sunbeam4[3].checked(true);
    sunbeam4[4].checked(true);
    } else {
    sunbeam4[0].checked(false);
    sunbeam4[1].checked(false);
    sunbeam4[2].checked(false);
    sunbeam4[3].checked(false);
    sunbeam4[4].checked(false);
    }

      if (sunswitch[0].checked()) {
    sunbeam5[0].checked(true);
    sunbeam5[1].checked(true);
    sunbeam5[2].checked(true);
    sunbeam5[3].checked(true);
    sunbeam5[4].checked(true);
    } else {
    sunbeam5[0].checked(false);
    sunbeam5[1].checked(false);
    sunbeam5[2].checked(false);
    sunbeam5[3].checked(false);
    sunbeam5[4].checked(false);
    }
}