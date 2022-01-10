//Exemplo de cadeia de prototypes
/*
const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
*/

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function(perc) {
    this.preco -= this.preco * perc / 100;
};

Produto.prototype.aumentaPreco = function(perc) {
    this.preco += this.preco * perc / 100;
};

const p1 = new Produto('Camiseta',50);

const p2 = {
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);

const p3 = Object.create(Produto.prototype, {
    nome: {writable: true, configurable: true, enumerable:true, value: 'Chinelo'},
    preco: {writable: true, configurable: true, enumerable:true, value: 113},
    tamanho: {writable: true, configurable: true, enumerable:true, value: 44}
});
