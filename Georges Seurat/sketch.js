let img;

function preload() {
  img = loadImage('A Sunday on La Grande Jatte.png');
}
function setup() {
  createCanvas(1225, 1016);
  noStroke();
  background(255);
}

function draw() {

 for (var i = 0; i < 10; i++) {
  img.loadPixels();
  const pixelX = random(width);
  const pixelY = random(height);
  const pixelColor = img.get(pixelX, pixelY);

  fill(pixelColor);

    ellipse(pixelX, pixelY, i*0.6, i*0.2);
  }
  
}