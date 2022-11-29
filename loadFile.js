// Variáveis de carregamento de arquivo
let imgBKG;
let imgActor_1;
let imgCars;
let imgCar1;
let imgCar2;
let imgCar3;

// Função de carregamento de arquivo
function preload(){
  imgBKG = loadImage("./img/estrada.png");
  imgActor_1 = loadImage("./img/ator-1.png");
  imgCar1 = loadImage("./img/carro-1.png");
  imgCar2 = loadImage("./img/carro-2.png");
  imgCar3 = loadImage("./img/carro-3.png");
  imgCars = [imgCar1, imgCar2, imgCar3];
}