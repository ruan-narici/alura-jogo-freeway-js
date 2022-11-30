function setup() {
  createCanvas(600, 400);
  sounds[0].loop();
}

function draw() {
  background(imgBKG);
  showActor_1();
  showCar();
  moveCar();
  moveActor_1();
  returnOriginalPosition();
  verifyColisionWithActor(); 
  addPoints();
  showPoints();
}