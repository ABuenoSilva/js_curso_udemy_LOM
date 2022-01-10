/*
//Se não declarar parametros mas passar, ele fica nos arguments (não existe em arrow function, utilizar rest operator)
function myFunc() {
    console.log(arguments);
}
myFunc(1, '2', {nome: 'Eu'}, [1,2,3]);
*/
/*
//Declarando parametros também podem chegar adicionais
function myFunc2(numero) {
    console.log(arguments);
    console.log(numero ** 2);
}
myFunc2(4, 'abc');
*/

/*
//Valores default
function myFunc3(a, b = 2, c = 3) {
    console.log(a + b * c);
}
myFunc3(1);
myFunc3(2, 4);
myFunc3(2, 4, 6);
myFunc3(2, null, 8); //null vai constar como parâmetro
myFunc3(2, undefined, 8); //undefined não vai constar como parâmetro
*/

//Desestruturação 
//Objeto
/*
function myFunc4({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
myFunc4({nome: 'Alexandre', sobrenome: 'Bueno', idade:48});
let pessoa = {nome: 'Zanza', sobrenome: 'Garcia', idade:47};
myFunc4(pessoa);
*/
//Array
/*
function myFunc4([nome, sobrenome, idade]) {
    console.log(nome, sobrenome, idade);
}
myFunc4(['Alexandre', 'Bueno', 48]);
let pessoa = ['Zanza', 'Garcia', 47];
myFunc4(pessoa);
*/
/*
//Parametro com rest operator
function myFunc4(operador, acumulador, ...numeros) {
    let operacao = `acumulador ${operador}= numero`;
    for (let numero of numeros) {
        eval(operacao);
    }
    console.log(acumulador);
}
myFunc4('/', 1, 10, 20, 30);
*/