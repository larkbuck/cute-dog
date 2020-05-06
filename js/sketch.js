let paw;

function preload() {
  paw = loadImage('assets/paw-grey.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // draw a paw at 1 second intervals
  setInterval(function() {
    let pawSize = random(15, 30);
    image(paw, random(windowWidth), random(windowHeight), pawSize, pawSize);
  }, 1000)

}

function draw() {
  // background(220); // draws background fill
  // clear(); // clears background
  // ellipse(mouseX, mouseY, 30); // draws circle at cursor
}
