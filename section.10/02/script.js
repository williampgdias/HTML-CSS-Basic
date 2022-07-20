const nav = document.querySelector('nav');
const products = document.querySelector('.products a');

console.log(nav);
console.log(products);
console.log(products.href);

console.dir(nav);

nav.style.backgroundColor = 'black';
nav.style.padding = '1rem';

nav.classList.add('active');
