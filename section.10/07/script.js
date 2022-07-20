// const curso = {
//   nome: 'JavaScript',
//   completar() {
//     console.log('curso Completo');
//   },
// };

// console.log(curso.nome);
// curso.completar();

const ativar = document.querySelector('.ativar');

function handleClick(event) {
  console.log(event);
}

ativar.addEventListener('click', handleClick);

console.log(ativar);
