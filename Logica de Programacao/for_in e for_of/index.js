const frutas = ['Pera', 'Maçã', 'Uva'];
const pessoa = {
    nome: 'Alexandre',
    sobrenome: 'Bueno',
    idade: 48
}
const nome = 'Alexandre Bueno';

//for in - lê os indices ou chaves
for (let i in frutas) {
    console.log(i);
    console.log(frutas[i]);
}

for (let i in pessoa) {
    console.log(i);
    console.log(pessoa[i]);
}

for (let i in nome) {
    console.log(i);
    console.log(nome[i]);
}

//for of - lê os valores do interável
for (let i of nome) {
    console.log(i);
}
for (let i of frutas) {
    console.log(i);
}

/* Objeto dá erro pois não é interável
for (let i of pessoa) {
    console.log(i);
}
*/

//foreach() - método de array
frutas.forEach( (v, i, a) => {
    console.log(v, i, a);
});
