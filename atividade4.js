function relogio (tempoEmSegundos){
  
    const event = new Date(tempoEmSegundos)
    
    let horas;
    let minutos;
    let segundos;
    
    horas = Math.floor(tempoEmSegundos/3600);
    tempoEmSegundos -= horas*3600;
    
    minutos = Math.floor(tempoEmSegundos / 60);
    tempoEmSegundos -= minutos*60;
    
    segundos = tempoEmSegundos;
  
    return {horas, minutos, segundos};
  }
  
  
  console.log(relogio(3958));