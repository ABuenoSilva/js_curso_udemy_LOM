const { texto } = require('./base');
const regExp1 = /João|Maria/gi;

//console.log(texto.match(regExp1));
//console.log(texto.replace(regExp1,'Dudu'));
//console.log(texto.replace(/João/gi,'Felipe'));
//console.log(texto.replace(/(João|Maria)/gi,'"$1"'));
console.log(texto.replace(/(João|Maria)/gi, (input => {
    return input.toUpperCase();
})));