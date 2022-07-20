// function logCurso() {
//   const nome = 'JavaScript';
//   console.log(nome);
// }

// logCurso();

// function logCurso(nome, horas) {
//   console.log(nome, horas, 'horas');
//   return nome;
// }

// logCurso('JavaScript', '36');
// logCurso('HTML', '20');

// const retorno = logCurso('HTML', '20');

// console.log(retorno);

const nome = 'JavaScript';

function logCurso() {
  const nome = 'HTML';
  console.log(nome);
  return nome;
}

const nomeDaFuncao = logCurso();

console.log(nomeDaFuncao);
console.log(nome);
