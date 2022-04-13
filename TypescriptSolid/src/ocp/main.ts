import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercentDiscount } from './classes/discount';

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const order = new Order(shoppingCart, new Messaging(), new Persistency());

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
