const { alfabeto } = require('./base');

// [abc] -> Conjunto [^] - negação
//[n-m] -> range
// /uXXXX -> unicode

console.log(alfabeto);
console.log(alfabeto.match(/[abc]/g));
console.log(alfabeto.match(/[abc]+/g));
console.log(alfabeto.match(/[abc123]+/g));
console.log(alfabeto.match(/[^abc123]/g));
console.log(alfabeto.match(/[0-9]+/g));
console.log(alfabeto.match(/\d+/g)); //equivalente à linha acima
console.log(alfabeto.match(/[^0-9]+/g));
console.log(alfabeto.match(/\D+/g)); //equivalente à linha acima
console.log(alfabeto.match(/[A-Za-z0-9]+/g));
console.log(alfabeto.match(/\w+/g)); //equivalente à linha acima
console.log(alfabeto.match(/[^A-Za-z0-9]+/g));
console.log(alfabeto.match(/\W+/g)); //equivalente à linha acima