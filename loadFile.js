// Variáveis de carregamento de arquivo
let imgBKG;
let imgActor_1;
let imgCars;
let imgCar1;
let imgCar2;
let imgCar3;
let sounds;
let soundBKG;
let soundColision;
let soundPoint;

// Função de carregamento de arquivo
function preload(){
  imgBKG = loadImage("./img/estrada.png");
  imgActor_1 = loadImage("./img/ator-1.png");
  imgCar1 = loadImage("./img/carro-1.png");
  imgCar2 = loadImage("./img/carro-2.png");
  imgCar3 = loadImage("./img/carro-3.png");
  imgCars = [imgCar1, imgCar2, imgCar3, imgCar1, imgCar3, imgCar2];
  soundBKG = loadSound("./sound/trilha.mp3");
  soundColision = loadSound("./sound/colidiu.mp3");
  soundPoint = loadSound("./sound/pontos.wav");
  sounds = [soundBKG, soundColision, soundPoint];
}