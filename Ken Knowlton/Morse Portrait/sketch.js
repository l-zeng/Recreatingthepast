//let Morse;
let Morse2;

function preload() {
//  Morse = loadImage('Morse.jpg');
  Morse2 = loadImage('Morse2.png');
}

function setup() {
  createCanvas(465, 580);
  background(0);
  //image(Morse2, 0, 0);
  filter(GRAY);
}

function draw() {
  fill(255);
  for (i = 0; i < Morse2.width; i+=10){
    for (j = 0; j < Morse2.height; j+=10){
      var c = Morse2.get(i,j);
      var bri = brightness(c);

    noStroke();
    if (bri < 20) {
    fill(0);
    rect(i, j, map(bri, 0, 255, 0, 0), 0);
          } else {
    fill(255);
    rect(i, j, map(bri, 0, 255, 0, 20), 3);
      }
    }
  }
}
