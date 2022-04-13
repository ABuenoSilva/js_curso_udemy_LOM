/* LSP: O Comportamento de qualquer subtipo (filhos, etc) deve seguir o comportamento do tipo principal
  - Manter coerência de retorno
  - Funcionar com qualquer subtipo. Por exemplo, comportamentos de subtipos de Animal (como um cachorro) devem atender a todos os animais
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercentDiscount } from './classes/discount';
import { IndividualCustomer } from './classes/customer';

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const individualCustomer = new IndividualCustomer(
  'Alexandre',
  'Bueno',
  '155432048-84',
);
const order = new Order(
  shoppingCart,
  new Messaging(),
  new Persistency(),
  individualCustomer,
);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Calça', 99.9));
shoppingCart.addItem(new Product('Boné', 199.9));
shoppingCart.addItem(new Product('Tênis', 1500));

console.log(shoppingCart.items);

shoppingCart.removeItem(1);

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
