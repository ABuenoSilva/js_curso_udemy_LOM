//some todos os numeros
//retorne um array com os pares (filter)
//retorne um array com o dobro dos valores (map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce( function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador} , 0 );
console.log(total);

const pares = numeros.reduce( function(acumulador, valor) {
    if(valor%2===0) acumulador.push(valor);
    return acumulador} , [] );
console.log(pares);

const dobro = numeros.reduce( function(acumulador, valor) {
    acumulador.push(valor * 2);
    return acumulador} , [] );
console.log(dobro);

//retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 47 }
];
const maisVelha = pessoas.reduce( function(acumulador, valor) {
    return valor.idade > acumulador.idade ? valor : acumulador;
});
console.log(maisVelha);