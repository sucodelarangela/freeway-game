//variaveis dos carros
let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 95, 150, 210, 270, 318]
let velocidades = [2, 2.5, 3.2, 5, 3.3, 2.3]
let imagens = [
  'images/carro-1.png',
  'images/carro-2.png',
  'images/carro-3.png',
  'images/carro-1.png',
  'images/carro-2.png',
  'images/carro-3.png'
]
let comprCarros = 50
let largCarros = 40

function mostraCarros() {
  for (let i = 0; i < imagens.length; i++) {
    let carros = new Image()
    carros.src = imagens[i]
    carros.onload = function () {
      pincel.drawImage(carros, xCarros[i], yCarros[i], comprCarros, largCarros)
    }
  }
}

function moveCarros() {
  for (let i = 0; i < imagens.length; i++) {
    xCarros[i] -= velocidades[i]
    if (saiuDaTela(xCarros[i])) {
      xCarros[i] = 600
    }
  }
}

function saiuDaTela(xCarro) {
  return xCarro < -50
}
