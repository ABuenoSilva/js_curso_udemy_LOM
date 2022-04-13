type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }
    this._orderStatus = 'closed';
    this.sendMessage('Seu pedido foi recebido');
    this.saveOrder();
    this.clear();
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso...');
  }

  clear(): void {
    this._items.length = 0;
    console.log('Itens retirados do carrinho');
  }
}

const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addItem({ name: 'Camiseta', price: 49.9 });
shoppingCart.addItem({ name: 'Calça', price: 99.9 });
shoppingCart.addItem({ name: 'Boné', price: 199.9 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());

shoppingCart.removeItem(1);

console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
