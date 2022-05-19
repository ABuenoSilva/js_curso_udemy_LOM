import { Seller } from './seller';
import { SellerProduct } from './seller-product';

export class Mediator {
  private sellers: Seller[] = [];

  addSeller(...sellers: Seller[]): void {
    sellers.forEach((seller) => {
      seller.setMediator(this);
      this.sellers.push(seller);
    });
  }

  buy(id: string): SellerProduct | void {
    let product;
    for (let i = 0; i < this.sellers.length; i++) {
      product = this.sellers[i].sell(id);
      if (product) {
        console.log('Aqui está', product.id, product.name, product.price);
        return product;
      }
    }

    console.log('Não foi encontrado nenhum vendedor para o produto ', id);
    return;
  }

  showProducts(): void {
    this.sellers.forEach((seller) => seller.showProducts());
  }
}
