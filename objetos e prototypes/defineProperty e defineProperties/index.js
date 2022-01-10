//Definição de propriedade(s)
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preço = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra ou esconde a chave
        value: estoque, //valor da chave
        writable: false, //pode ou não alterar o valor
        configurable: false //chave pode ser apagada ou ser reconfigurada
    });

    Object.defineProperties(this, {
        nome: {},
        preco: {}
    });

}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 5000;
delete p1.estoque;
console.log(p1);