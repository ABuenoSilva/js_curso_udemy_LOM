import { ECommerceShoppingCart } from './shopping-cart/ecommerce-shopping-cart';
import { DefaultDiscount } from './shopping-cart/strategies/default-discount';
import { NewDiscount } from './shopping-cart/strategies/new-discount';

const shoppingCart = new ECommerceShoppingCart();
shoppingCart.discount = new DefaultDiscount();
shoppingCart.addProduct(
  { name: 'Produto 1', price: 50 },
  { name: 'Produto 2', price: 100 },
);
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());

shoppingCart.discount = new NewDiscount();
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
