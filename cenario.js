function mostraEstrada() {
  estrada.src = 'images/estrada.png'
  estrada.onload = function () {
    pincel.drawImage(estrada, 0, 0, cenario.width, cenario.height)
    incluiPlacar()
  }
}

function limpaTela() {
  estrada.src = ''
  mostraEstrada()
}
