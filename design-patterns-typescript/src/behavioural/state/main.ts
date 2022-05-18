import { ShoppingOrder } from './shopping-order/shopping-order';

const order = new ShoppingOrder();
order.waitPayment();
order.approvePayment();
order.shipOrder();
order.rejectPayment();
order.approvePayment();
order.waitPayment();
