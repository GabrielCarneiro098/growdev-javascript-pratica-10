function numeroPrimo(numero) {
    if (numero <= 1) {
        return false
      }
    for (let index = 2; index < numero; index++) {
      if (numero % index === 0) {
        return false
      }
    }
   return true
 }
 
 console.log(numeroPrimo(7))
 console.log(numeroPrimo(1))
 console.log(numeroPrimo(10))