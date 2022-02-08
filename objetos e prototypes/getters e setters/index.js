function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preço = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra ou esconde a chave
        configurable: true, //chave pode ser apagada ou ser reconfigurada
        get: () => estoquePrivado,
        set: (valor) => {
            if(typeof valor !== 'number') {
                throw new TypeError('Mensagem');
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1.estoque);
p1.estoque = 'a';
console.log(p1.estoque);