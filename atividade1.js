function calcularMedia(notas, letra) {
  let media = 0;

  if (letra === "A") {
    media = (notas[0] + notas[1] + notas[2]) / 3;
  } else if (letra === "P") {
    media = (notas[0] * 5 + notas[1] * 3 + notas[2] * 2) / 10;
  } else {
    return "Letra invalida!";
  }

  return media;
}

let notasDoAluno = [8, 3, 9];
var letra = "A";
const mediaCalculada = calcularMedia(notasDoAluno, letra);
console.log("media do aluno", mediaCalculada);
