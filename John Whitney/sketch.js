function setup() {
  createCanvas(667, 500);
  noStroke();
}

function draw() {
  background(0);
  const time = Date.now()/500;
//1--------------------------------------------------
  fill(43, 54, 153, 255);
  beginShape();
  vertex(0,500);
  for (let i = 0; i < 667; i += 1) {
    const y1 = 220 + 135 * cos(time * 0.606 + i * 0.003);
    vertex(i, y1);
  }
  vertex(667,500);
  endShape(true);
//2--------------------------------------------------
  fill(58, 123, 249, 255);
  beginShape();
  vertex(0,500);
  for (let i = 0; i < 667; i += 1) {
    const y1 = 190 + 30 * cos(time * 0.588 + i * 0.005);
    vertex(i, y1);
  }
  vertex(667,500);
  endShape(true);
//3--------------------------------------------------
  fill(112,124,242,204);
  beginShape();
  vertex(0,500);
  for (let i = 0; i < 667; i += 1) {
    const y1 = 93 + 87 * sin(time * 0.667 + i * 0.003);
    vertex(i, y1);
  }
  vertex(667,500);
  endShape(true);
//4--------------------------------------------------
  fill(185, 190, 248, 127.5);
  beginShape();
  vertex(0,500);
  for (let i = 0; i < 667; i += 1) {
    const y1 = 323 + 87 * sin(time * 0.667 + i * 0.003);
    vertex(i, y1);
  }
  vertex(667,500);
  endShape(true);
//5--------------------------------------------------
  fill(165, 177, 252, 127.5);
  beginShape();
  vertex(0,500);
  for (let i = 0; i < 667; i += 1) {
    const y1 = 320 + 28 * cos(time * 0.667 + i * 0.005);
    vertex(i, y1);
  }
  vertex(667,500);
  endShape(true);
//6--------------------------------------------------
  fill(77, 93, 200, 178.5);
  push();
  rotate(PI/-0.246);
  beginShape();
  vertex(-800,600);
  for (let i = 0; i < 667; i += 1) {
    const y1 =520 + 35 * cos(time * 1.667 + i * 0.0075);
    vertex(i, y1);
  }
  vertex(667,800);
  endShape(true);
  pop();
//7--------------------------------------------------
  fill(97, 102, 219, 255);
  push();
  translate(-10, 0);
  rotate(PI/-0.2485);
  beginShape();
  vertex(-100,600);
  for (let i = 0; i < 667; i += 1) {
    const y1 =535 + 20 * sin(time * 1.667 + i * 0.0055);
    vertex(i, y1);
  }
  vertex(667,800);
  endShape(true);
  pop();
}



