//Camiseta = cor, caneca = material
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype); //Problema - o construtor vira Produto
Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype.aumento = function(perc) { this.preco += this.preco * perc / 100};

const camiseta = new Camiseta('Regata', 7.5, 'Preta');
console.log(camiseta);
camiseta.aumento(100);
console.log(camiseta);
