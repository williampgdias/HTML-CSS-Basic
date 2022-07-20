// const curso = {
//   nome: 'JavaScript',
//   completar() {
//     console.log('curso Completo');
//   },
// };

// console.log(curso.nome);
// curso.completar();

// const ativar = document.querySelector('.ativar');

// function handleClick(event) {
//   console.log(event);
// }

// ativar.addEventListener('click', handleClick);

// console.log(ativar);

//////////////////// EVENTOS 2 ////////////////////

// const botao = document.querySelector('.botao');

// function mostrar() {
//   const texto = document.querySelector('.texto');
//   texto.classList.toggle('ativar');
// }

// botao.addEventListener('click', mostrar);

//////////////////// WINDOW ////////////////////

//////////////////// MOUSEOVER ////////////////////

// function coordenadaMouse(event) {
//   const coordenadas = {
//     x: event.x,
//     y: event.y,
//   };
//   console.log(coordenadas);
// }

// window.addEventListener('mousemove', coordenadaMouse);

//////////////////// SCROLL ////////////////////

function scroll() {
  console.log(window.scrollY);
}

window.addEventListener('scroll', scroll);
