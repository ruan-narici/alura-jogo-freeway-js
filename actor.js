// Variáveis do Actor_1
let ximgActor_1 = 50;
let yimgActor_1 = 365;
let wimgActor_1 = 35;
let himgActor_1 = 30;
let vimgActor_1 = 3;

// Funções do Actor_1
function showActor_1(){
  image(imgActor_1, ximgActor_1, yimgActor_1, wimgActor_1, himgActor_1);
}

function moveActor_1(){
  if (keyIsDown(UP_ARROW)){
    yimgActor_1 -= vimgActor_1;
  }
    if (keyIsDown(DOWN_ARROW)){
    yimgActor_1 += vimgActor_1;
  }
}