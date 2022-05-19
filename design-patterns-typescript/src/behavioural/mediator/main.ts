import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';

const mediator = new Mediator();
const seller1 = new Seller();
seller1.addProduct(
  { id: '1', name: 'Camiseta', price: 100.0 },
  { id: '2', name: 'Tênis', price: 500.0 },
);

const seller2 = new Seller();
seller2.addProduct(
  { id: 'A', name: 'Broca', price: 10.0 },
  { id: 'B', name: 'Furadeira', price: 600.0 },
);

mediator.addSeller(seller1, seller2);

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy('B');
