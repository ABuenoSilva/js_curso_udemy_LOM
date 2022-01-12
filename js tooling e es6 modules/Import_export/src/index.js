import { nome as nome2, surname, idade, soma } from './modulo1';
import { Pessoa } from './modulo2';
/*
import * as Modulo3 from './modulo3';
import mult from './modulo3';
*/
import mult, * as Modulo3 from './modulo3';

const nome = 'Zanza';

console.log(nome, nome2, surname, idade, soma(3,8));

const p1 = new Pessoa(nome, surname);
console.log(p1);

const bichos = [...Modulo3.caes, ...Modulo3.passaros, ...Modulo3.coelhos];
console.log(bichos);

console.log(mult(2,45));