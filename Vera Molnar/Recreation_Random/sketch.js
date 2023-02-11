function setup() {
  createCanvas(800, 800);
// Sets the mode for drawing rectangles
  rectMode(CENTER);
  strokeWeight(2);
}

function draw() {
//Sets the color of the background
  background(242,242,244);
   randomSeed(mouseX);
//Draw 24 squares_horizontal&vertical
  for (let i = 0; i < 24; i += 1) {
    for (let j = 0; j < 24; j += 1) {
      const x = map(i, 0, 23, 40, 760);
      const y = map(j, 0, 23, 40, 760);
      for (let k = 0; k < 1; k += 1) {
        const width = map(k, 0, 23, 23, 144);
//Radomize the # of squares that rotate by manipulate the mouse
        if (noise(i, j) < random()){
          push();
          translate(x, y);
          rotate(radians(45));
          translate(-x, -y);
          rect(x, y, width, width);
          pop();
        } else {
//Sets the color&dimension of the squares
          fill(42,33,36)
          stroke(42,33,36)
          rect(x, y, width, width);
        }
      }
    }
  }
}
