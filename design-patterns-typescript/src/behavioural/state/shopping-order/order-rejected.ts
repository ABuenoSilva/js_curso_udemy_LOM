import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderRejected implements ShoppingOrderState {
  private name = 'OrderPending';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }
  approvePayment(): void {
    console.log('Não posso aprovar um pedido rejeitado');
  }
  rejectPayment(): void {
    console.log('O pedido já está no estado pagamento rejeitado');
  }
  waitPayment(): void {
    console.log('Não posso mover para pendente um pedido rejeitado');
  }
  shipOrder(): void {
    console.log('Não posso enviar um pedido rejeitado');
  }
}
