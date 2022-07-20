const nome = 'O Senhor dos Anéis';
const ano = 1954;
const autor = 'J. R. Tolkien';

const nomeFilme = 'O Senhor dos Anéis';
const anoFilme = 2001;
const diretorFilme = 'Peter Jackson';

const livro = {
  nome: 'O Senhor dos Anéis',
  ano: 1954,
  autor: 'J. R. Tolkien',
};

const filme = {
  nome: 'O Senhor dos Anéis',
  ano: 2001,
  autor: 'J. R. Tolkien',
  diretor: 'Peter Jackson',
};

console.log(2022 - livro.ano);
console.log(livro.nome + ' ' + filme.diretor);
console.log(livro.nome === nome);

const texto = document.querySelector('p');

console.log(texto.innerHTML);

const decimal = 2.99;

console.log(decimal.toFixed());
