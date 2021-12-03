//variaveis do ator
let xAtor = 170
let yAtor = 366
let comprAtor = 30
let largAtor = 30
let colidiu = false
let meusPontos = 0

function mostraAtor() {
  let ator = new Image()
  ator.src = 'images/ator-1.png'
  ator.onload = function () {
    pincel.drawImage(ator, xAtor, yAtor, comprAtor, largAtor)
  }
}

//keyCodes das setas do teclado
// let esquerda = 37
let cima = 38
// let direita = 39
let baixo = 40

function moveAtor(evento) {
  if (evento.keyCode == cima) {
    yAtor -= 15
  } else if (evento.keyCode == baixo) {
    if (yAtor < 366) {
      yAtor += 15
    }
  }
}

function checaColisao() {
  //colisaoRetCirc(xRet, yRet, largRet, altRet, xCirc, yCirc, diametro)
  for (let i = 0; i < imagens.length; i++) {
    colidiu = colisaoRetCirc(
      xCarros[i],
      yCarros[i],
      comprCarros,
      largCarros,
      xAtor,
      yAtor,
      15
    )
    if (colidiu) {
      resetaAtor()
      if (meusPontos > 0) {
        meusPontos -= 1
      }
      colisao.play()
    }
  }
}

function resetaAtor() {
  yAtor = 366
}

function incluiPlacar() {
  pincel.font = '25px Arial'
  pincel.textAlign = 'center'
  pincel.fillText(meusPontos, 170, 27)
}

function marcaPonto() {
  if (yAtor < 15) {
    meusPontos++
    resetaAtor()
    pontos.play()
  }
}
