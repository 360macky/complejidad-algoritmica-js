/*
  * Complejidad temporal -> O(10 + n + n^2) = O(n^2 * cant) 
  * Complejidad espacial -> O(13) = O(1)
  * Espacio Auxiiar -> O(12) = O(1)
*/

const aditionPrimeNumbers = function (cant) { 
    if (cant === 0) return 0; 

    let numberPrime = 0;
    let n = 0; 
    while (n < cant) { 
        numberPrime++; 
        let divisible = 0; 
        for(let i = 1; i <= numberPrime; i++) { 
            if (numberPrime % i == 0) { 
                divisible++;//O(1)
            }
        }
        if (divisible === 2) {
            n++;
        }
    }

    cant--;
    return numberPrime + aditionPrimeNumbers(cant); 
}