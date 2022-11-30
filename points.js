let Points = 0;

function addPoints(){
  if (yimgActor_1 <= 15){
    Points += 1;
    goToOriginalPosition();
  }
}

function showPoints(){
  textSize(25);
  stroke(2)
  fill(color(255, 220, 0))
  text(Points, 80, 26);
}