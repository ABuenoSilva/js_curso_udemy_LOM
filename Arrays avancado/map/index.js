///OBS: se mudar algo diretamente no objeto passado na callback altera o próprio objeto também

//Dobre os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosDobrados = numeros.map( v => v * 2);
console.log(numeros);
console.log(numerosDobrados);

//retorne apenas uma string com o nome da pessoa
//remova apenas a chave "nome" do objeto
//adicione uma chave id em cada objeto 
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const a1 = pessoas.map( v => v.nome);
console.log(pessoas);
console.log(a1);
const a2 = pessoas.map ( function(v) { return {idade: v.idade} });
console.log(a2);
console.log(pessoas);
const a3 = pessoas.map ( function(v, i) { return {...v, id: i+1 } });
console.log(pessoas);
console.log(a3);