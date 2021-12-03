//Verifica a colisão entre um retângulo e um círculo

function colisaoRetCirc(xRet, yRet, largRet, altRet, xCirc, yCirc, diametro) {
  //2d
  // variáveis temporárias para designar as bordas para teste
  let testeX = xCirc
  let testeY = yCirc

  // qual borda está mais próxima?
  if (xCirc < xRet) {
    testeX = xRet // borda esquerda
  } else if (xCirc > xRet + largRet) {
    testeX = xRet + largRet
  } // borda direita

  if (yCirc < yRet) {
    testeY = yRet // borda superior
  } else if (yCirc > yRet + altRet) {
    testeY = yRet + altRet
  } // borda inferior

  // aferir distâncias das bordas mais próximas
  // A distância entre dois pontos no plano cartesiano é dada pela raiz quadrada de (x1 - x2)² + (y1 - y2)²
  let distancia = Math.sqrt((xCirc - testeX) ** 2 + (yCirc - testeY) ** 2)

  // se a distância for menor que o raio, colisão!
  if (distancia <= diametro / 2) {
    return true
  }
  return false
}
