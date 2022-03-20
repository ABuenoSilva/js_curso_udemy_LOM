/* eslint-disable */

//Tipos básicos (ocorre inferência de tipos)
let nome: string = 'Luiz'; //Qualquer tipo de string
let idade: number = 50; //10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); //symbol
// let big: bigint = 10n; //bigint

//Tipos passados por referencia
//Arrays
let arrayOfNumbers: Array<number> = [1, 2, 3];
let arrayOfNumbers2: number[] = [1, 2, 3];
let arrayOfStrings: Array<string> = ['a', 'b'];
//Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: 'Alexandre',
  idade: 49
}
//Funções
function soma(x: number,y: number) {
  return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y;
