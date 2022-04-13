import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './shopping-cart';
import { OrderCustomer } from './interfaces/customer-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: OrderCustomer,
  ) {}

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }
    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Seu pedido no valor de ${this.cart.totalWithDiscount()} foi recebido`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
    console.log(
      `O cliente é ${this.customer.getName()} e o documento é ${this.customer.getIDN()}`,
    );
  }
}
