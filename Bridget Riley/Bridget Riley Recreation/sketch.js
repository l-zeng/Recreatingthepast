function setup() {
  createCanvas(640, 640);
  angleMode(DEGREES);
}

function draw() {
  background(223, 221, 216);
for (let i = 0; i <= 80; i+= 1) {
    if (i % 2 === 0) { 
      stroke(38, 39, 44);
    } else { 
      noStroke();
    }
    strokeWeight(8);
    line(i*8-4, 0, i*8-4, height);
  }
  
drawingContext.save();
noStroke();
fill(223, 221, 216);
quad(320, 30.72, 609.28, 320, 320, 609.28, 30.72, 320)
drawingContext.clip();
  

for (let i = 0; i <= 36; i += 1) {
    const x = i * 8 - 4;
    const weight = pow(0.6, x / 64) * 17;
    strokeWeight(weight);
    if (i % 2 === 0) {
      stroke(38, 39, 44);
    } else {
      noStroke();
    }
    line(x + 36, 0, x + 36, 640);
  }

  push();
  translate(width / 2, 579 / 2);
  rotate(180);
  for (let i = 0; i <= 36; i += 1) {
    const x = i * 8 - 4;
    const weight = pow(0.6, x / 64) * 17;
    strokeWeight(weight);
    if (i % 2 === 0) {
      stroke(38, 39, 44);
    } else {
      noStroke();
    }
    line(x - 284, -400, x - 284, 300);
  }
  pop();
  
  
drawingContext.restore();
}
