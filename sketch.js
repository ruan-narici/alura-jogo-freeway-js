function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(imgBKG);
  showActor_1();
  showCar();
  moveCar();
  moveActor_1();
  returnOriginalPosition();
}