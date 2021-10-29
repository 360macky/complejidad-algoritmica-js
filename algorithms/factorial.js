/**
 * Complejidad Temporal -> O(  )
 * Complejidad Espacial -> O(  )
 * Espacio Auxiliar -> O(  )
 */
function factorial(numero) {
  let resultado = 1;

  for (let i = 2; i <= numero; i += 1) {
    resultado *= i;
  }

  return resultado;
}
