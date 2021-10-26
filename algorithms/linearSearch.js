/**
 * Complejidad Temporal -> O(  )
 * Complejidad Espacial -> O(  )
 * Espacio Auxiliar -> O(  )
 */
function linearSearch(arreglo, clave) {
  for (let indice = 0; indice < arreglo.length; indice++) {
    if (arreglo[indice] === clave) {
      return indice;
    }
  }
  return -1;
}
