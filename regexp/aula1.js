//g - global (encontra todas as ocorrências)
//i - insensitive (case)
// () - grupo
// | - ou
const { texto } = require('./base');
const regExp1 = /João/gi;
const regExp2 = /Teve 5 filhos/i;
const regExp3 = /(maria|joao)(, hoje sua esposa)/i;

console.log(regExp1.test(texto));
console.log(regExp2.exec(texto));
console.log(regExp2.exec(texto)[0]);
console.log(regExp2.exec(texto).index);

const found = regExp3.exec(texto);
console.log(found);

