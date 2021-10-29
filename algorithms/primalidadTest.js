/**
 * Complejidad Temporal -> O(  )
 * Complejidad Espacial -> O(  )
 * Espacio Auxiliar -> O(  )
 */
function primalidadTest(numero) {

  if (numero <= 3) {
    return true;
  }

  if (numero % 1 !== 0) {
    return false;
  }

  if (numero <= 1) {
    return false;
  }

  if (numero % 2 === 0) {
    return false;
  }

  const limiteDivisor = Math.sqrt(numero);
  for (let divisor = 3; divisor <= limiteDivisor; divisor += 2) {
    if (numero % divisor === 0) {
      return false;
    }
  }

  return true;
}
