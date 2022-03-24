export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Array<Produto>): void {
    produtos.forEach((produto) => this.produtos.push(produto));
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Camiseta', 50.9);
const produto2 = new Produto('Tênis', 1500);

const carrinho = new CarrinhoDeCompras();

carrinho.inserirProdutos(produto1, produto2);

console.log(carrinho.quantidadeProdutos());
console.log(carrinho.valorTotal());
