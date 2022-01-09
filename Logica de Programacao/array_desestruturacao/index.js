/*
let a = 'A';
let b = 'B';
let c = 'C';

console.log(a, b, c);
[a, b, c] = [1, 2, 3];
console.log(a, b, c);
const numeros = [4, 5, 6];
[a, b, c] = numeros;
console.log(a, b, c);
const letras = [b, c, a];
[a, b, c] = letras;
console.log(a, b, c);
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/*
const [um, dois, tres, ...resto] = numeros;
console.log(um, dois, tres, resto);
*/
/*
const [um,,tres, ...resto] = numeros;
console.log(um, tres, resto);
*/

const numeros2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
//console.log(numeros2[1][2]);
//const [/*pulei indice 0*/,[,,seis]] = numeros2;
//console.log(seis);
const [lista1, lista2, lista3] = numeros2;
const [,,seis] = lista2;
console.log(seis);