function perfeito(numero) {
    if (numero <= 1) {
      return false;
    }
    
    let soma = 0;
    
    for (let index = 1; index < numero; index++) {
        if (numero % index === 0) {
            soma += index;
        }
    }

    return numero === soma;
  }
  
  console.log(perfeito(6));
  console.log(perfeito(8));
  console.log(perfeito(28));
  console.log(perfeito(496));
  console.log(perfeito(500));
  console.log(perfeito(8128));