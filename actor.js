// Variáveis do Actor_1
let ximgActor_1 = 50;
let yimgActor_1 = 365;
let wimgActor_1 = 35;
let himgActor_1 = 30;
let vimgActor_1 = 3;
let rimgActor_1 = wimgActor_1 / 2;

// Funções do Actor_1
function showActor_1(){
  image(imgActor_1, ximgActor_1, yimgActor_1, wimgActor_1, himgActor_1);
}

function moveActor_1(){
  if (keyIsDown(UP_ARROW)){
    yimgActor_1 -= vimgActor_1;
  }
    if (keyIsDown(DOWN_ARROW) && 
       yimgActor_1 < 365){
    yimgActor_1 += vimgActor_1;
  }
}

// Com base nas Aulas e Atividades do desenvolvimento do Jogo Pong 
// apresentada pela Alura, eu consegui desenvolver a lógica para
// fazer a verificação de colisão entre o Carro e o Ator sem 
// precisar utilizar um código pronto. 
// Estou muito feliz com isso! 
function verifyColisionWithActor(){
  for (let i = 0; i < imgCars.length; i++){
    if (ximgCars[i] <= ximgActor_1 + rimgActor_1 && 
        ximgCars[i] + wimgCar > ximgActor_1 - rimgActor_1 &&
       yimgCars[i] >= yimgActor_1 - rimgActor_1 &&
       yimgCars[i] <= yimgActor_1 + rimgActor_1){
        verifyPointLoss();
        goToOriginalPosition();
    }
  }
}

function goToOriginalPosition(){
  yimgActor_1 = 365;
}