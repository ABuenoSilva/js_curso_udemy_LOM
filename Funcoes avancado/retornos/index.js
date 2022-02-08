//retorno de objeto com valores já assume o atributo
/*
function myFunc () {
    let nome = 'Alexandre';
    let sobrenome = 'Bueno';
    return {nome, sobrenome};
}
console.log(myFunc());
*/
/*
function criaObj(nome, sobrenome) {
    return {nome, sobrenome};
}
console.log(criaObj('Zanza','Garcia'));
*/

//Funções aninhadas (closure) (estudar mais !!!!)
/* tratamento "normal" para funções de multiplicacao"
function duplica(n) { return n * 2};
function triplica(n) { return n * 3};
function quadriplica(n) { return n * 4};
console.log(duplica(2), triplica(2), quadriplica(2));
*/
function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    }
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);
console.log(duplica(2), triplica(3), quadriplica(10));

//recursividade
function factorial(num) {
    if(num === 1) return num;
    return num * factorial(num - 1);
}

console.log(factorial(1500));