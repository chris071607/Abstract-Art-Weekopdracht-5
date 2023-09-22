let circles = []; // Array to store circle information

function setup() {
  createCanvas(400, 400);
  background(255);
  noStroke(); // Remove the stroke
  noLoop();

  // Generate random circles and store them in the array
  for (let i = 0; i < 100; i++) {
    addRandomCircle();
  }
}

function draw() {
  // Draw circles from the array
  for (let i = 0; i < circles.length; i++) {
    let circleInfo = circles[i];
    fill(circleInfo.fillColor);
    ellipse(circleInfo.x, circleInfo.y, circleInfo.radius * 2);
  }
}

function keyPressed() {
  if (key === 'Backspace' && circles.length > 0) {
    // Remove the last circle from the array
    circles.pop();
    // Clear the canvas and redraw the remaining circles
    background(255);
    for (let i = 0; i < circles.length; i++) {
      let circleInfo = circles[i];
      fill(circleInfo.fillColor);
      ellipse(circleInfo.x, circleInfo.y, circleInfo.radius * 2);
    }
  }
}

function addRandomCircle() {
  let x = random(width);
  let y = random(height);
  let radius = random(20, 100);

  // Randomly select fill color
  let r = random(255);
  let g = random(255);
  let b = random(255);

  // Create an object to store circle information
  let circleInfo = {
    x: x,
    y: y,
    radius: radius,
    fillColor: color(r, g, b),
  };

  // Add the circle to the array
  circles.push(circleInfo);
}
