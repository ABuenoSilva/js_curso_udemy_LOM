/*
//retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//filter(valor, indice, array)
const numerosFiltrados = numeros.filter( a => a > 10);
console.log(numeros);
console.log(numerosFiltrados);
*/

//retorne as pessoas que tem o nome com 5 letras ou mais
//retorne as pessoas com mais de 50 anos
//retorne as pessoas cujo nome termina com a
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const a1 = pessoas.filter( pessoa => pessoa.nome.length >= 5);
console.log(a1);

const a2 = pessoas.filter( pessoa => pessoa.idade > 50);
console.log(a2);

//const a3 = pessoas.filter( pessoa => pessoa.nome.match('[aA]$'));
const a3 = pessoas.filter( pessoa => pessoa.nome.toLowerCase().endsWith('a'));
console.log(a3);