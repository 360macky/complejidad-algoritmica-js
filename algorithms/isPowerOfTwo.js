/**
 * Complejidad Temporal -> O(  )
 * Complejidad Espacial -> O(  )
 * Espacio Auxiliar -> O(  )
 */

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  let numeroDividido = n;
  while (numeroDividido !== 1) {
    if (numeroDividido % 2 !== 0) {
      return false;
    }
    numeroDividido = numeroDividido / 2;
  }

  return true;
}
