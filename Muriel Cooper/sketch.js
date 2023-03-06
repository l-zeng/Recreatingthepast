let tFillPercentage = 0;

function preload() {
  font = loadFont("Neue-Haas-Grotesk.ttf");
  font2 = loadFont("NimbusSanL-Bol.otf");
  font3 = loadFont("NimbusSanL-Reg.otf");
}

function setup() {
  createCanvas(391, 597);
  noStroke();
}

function draw() {
  background(100);
//---------------------------------------------------------------
  textFont(font);
  fill(255);
  textSize(90);
  text("THE", 20, 85);
  text("HIDDEN", 20, 170);
  text("CURRIC", 20, 255);
  text("ULUM", 20, 340);
  
  textFont(font2);
  textSize(18);
  text("The Hidden Curriculum", 20, 582);
  
  textFont(font3);
  text("Benson R. Snyder", 225, 582);
  
  fill(0);
//THE---------------------------------------------------------------
//T
  rect(57.5, 17, 22, 16 * tFillPercentage);
  rect(41, 31, 17 * tFillPercentage, 28);
//H
  rect(116, 17, 26, 51 * tFillPercentage);
//E
  rect(204, 18, -25 * tFillPercentage, 14);
  rect(168.32, 43, 16, 16 * tFillPercentage);
  rect(153, 86, 16, -26 * tFillPercentage);
//HIDDEN---------------------------------------------------------------
//H
  rect(25, 102, 16, 21 * tFillPercentage);
  rect(41, 143, 10, -15 * tFillPercentage);
  rect(66, 102, 16, 13 * tFillPercentage);
  rect(66, 171, 16, -18 * tFillPercentage);
//I
  rect(92.5, 171, 16, -45 * tFillPercentage);
//D
  rect(119, 102, 17, 33 * tFillPercentage);
    push();
    translate(119, 92);
    rotate(radians(14));
    rect(0, 0, 35 * tFillPercentage, 19);
    pop(); 
  push();
  translate(178, 112);
  rotate(radians(-27));
  rect(0, 0, -35 * tFillPercentage, 19);
  pop(); 
    push();
    translate(185, 152);
    rotate(radians(48));
    rect(0, 0, -35 * tFillPercentage, 19);
    pop();
  rect(181, 128, -20 * tFillPercentage, 18);
//D
  rect(245, 102, -33.5 * tFillPercentage, 16);
      push();
      translate(239, 95);
      rotate(radians(77));
      rect(0, 0, 35 * tFillPercentage, 22);
      pop(); 
  rect(186, 152.5, 32 * tFillPercentage, 18.5);
      push();
      translate(183.5, 162);
      rotate(radians(-12));
      rect(0, 0, 35 * tFillPercentage, 19);
      pop(); 
//E
  rect(305, 102, -16 * tFillPercentage, 14);
  rect(301, 128, -20 * tFillPercentage, 14);
  rect(253, 147, 32.5 * tFillPercentage, 24);
//N
  rect(314, 171, 16, -37 * tFillPercentage);
  rect(356, 102, 16, 70 * tFillPercentage);
    push();
    translate(370, 171);
    rotate(radians(61));
    rect(0, 0, -32 * tFillPercentage, 14);
    pop();
//CURRIC---------------------------------------------------------------
//C
  push();
  translate(22, 185);
  rotate(radians(2));
  rect(0, 0, 37 * tFillPercentage, 51);
  pop();

  push();
  translate(23, 222);
  rotate(radians(37));
  rect(0, 0, 27 * tFillPercentage, 17);
  pop();
//U
  rect(92, 258, 16, -35 * tFillPercentage);
  rect(132, 188, 16, 30 * tFillPercentage);
    push();
    translate(92, 242);
    rotate(radians(-22));
    rect(0, 0, 30 * tFillPercentage, 30);
    pop(); 
//R
  rect(158, 258, 16, -24 * tFillPercentage);
  rect(173.5, 217, 7, 14 * tFillPercentage);
  rect(214, 188, -27.5 * tFillPercentage, 14);
    push();
    translate(222, 204);
    rotate(radians(130));
    rect(0, 0, 24 * tFillPercentage, 24);
    pop(); 
//R
  rect(221, 188, 36, 28 * tFillPercentage);
    push();
    translate(256, 175);
    rotate(radians(46));
    rect(0, 0, 20 * tFillPercentage, 19);
    pop();
  push();
  translate(283, 255);
  rotate(radians(71));
  rect(0, 0, -27 * tFillPercentage, 24);
  pop();
//I
  rect(286, 256, 17, -40 * tFillPercentage);
//C
  push();
  translate(347.5, 180);
  rotate(radians(68));
  rect(0, 0, 17 * tFillPercentage, 20);
  pop();
    push();
    translate(361.5, 190);
    rotate(radians(130));
    rect(0, 0, 19 * tFillPercentage, 15);
    pop();
  push();
  translate(389.5, 237);
  rotate(radians(37));
  rect(0, 0, -40 * tFillPercentage, 57);
  pop();
//ULUM---------------------------------------------------------------
//U
  rect(57, 342, 24, -28 * tFillPercentage);
    push();
    translate(72, 335);
    rotate(radians(33));
    rect(0, 0, -27 * tFillPercentage, 24);
    pop();
//L
  rect(90, 342, 22, -35 * tFillPercentage);
//U
  rect(143, 272, 18, 17 * tFillPercentage);
  rect(170, 342, 31, -38 * tFillPercentage);
//M
  rect(209, 342, 15.5, -49 * tFillPercentage);
  rect(263, 342, 16, -37 * tFillPercentage);
    push();
    translate(225, 301);
    rotate(radians(-16));
    rect(0, 0, 20 * tFillPercentage, 12);
    pop();
  push();
  translate(225, 342);
  rotate(radians(-83));
  rect(0, 0, 43 * tFillPercentage, 17.5);
  pop(); 
//-------------------------------------------------------------------
  tFillPercentage = constrain(map(mouseX, 0, width, 0, 1), 0, 1);
}
