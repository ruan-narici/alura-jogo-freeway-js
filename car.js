// Variáveis do Carro
let wimgCar = 50;
let himgCar = 30;

// Variáveis dos Carros
let ximgCars = [650, 650, 650, 650, 650, 650];
let yimgCars = [45, 100, 155, 210, 265, 320];
let vimgCars = [2, 2.7, 3.4, 4.1, 3.2, 2.1];

// Funções do Carro
function showCar(){
  for (let i = 0; i < imgCars.length; i += 1){
    image(imgCars[i], ximgCars[i], yimgCars[i], wimgCar, himgCar);
  }
}

function moveCar(){
  for (let i = 0; i < imgCars.length; i += 1){
    ximgCars[i] -= vimgCars[i];
  }
}

function returnOriginalPosition(){
  for (let i = 0; i < imgCars.length; i += 1){
    if (checkPosition(ximgCars[i])){
      ximgCars[i] = 650;
    }
  }
}

function checkPosition(xCar){
  return xCar < -50;
}