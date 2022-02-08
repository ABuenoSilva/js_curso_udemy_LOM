
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//Pares
const pares = numeros.filter( v => v%2===0);
console.log(pares);
//Pares dobrados
const pares2 = numeros.filter( v => v%2===0).map( v => v*2);
console.log(pares2);
//Soma do dobro
const pares3 = numeros.filter( v => v%2===0).map( v => v*2).reduce( (a, v) => a + v);
console.log(pares3);