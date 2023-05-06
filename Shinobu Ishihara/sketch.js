function setup() {
  createCanvas(1200, 600);
  angleMode(DEGREES);
  noFill();

  noLoop();
}

function draw() {
  background(255);
  noStroke();
  fill(random(208, 235), random(112, 179), random(75, 120));
  ellipse(width / 4, height / 2, 575, 575);

  let randomNumber = Math.floor(random(10));
  textSize(500);
  textAlign(CENTER, CENTER);
  fill(random(120, 181), random(117, 176), random(70, 105));
  text(randomNumber, width / 4, height / 2);

  for (let i = 0; i < width / 2; i += 10) {
    for (let j = 0; j < height; j += 10) {
      noStroke();
      const c = color(
        red(get(i + 5, j + 5)) + random(-20, 10),
        green(get(i + 5, j + 5)) + random(-20, 10),
        blue(get(i + 5, j + 5)) + random(-20, 10)
      );
      fill(c);
      circle(i + 5 + width / 2, j + 5, random(6.5, 9));
    }
  }

  //push();
  //fill(255);
  //rect(0, 0, 600, 600)
  //pop();
}

function mouseClicked() {
  location.reload();
}
