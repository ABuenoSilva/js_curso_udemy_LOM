import { ProductCustomizationDecorator } from './product/product-customization-decorator';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { Tshirt } from './product/t-shirt';

const tShirt = new Tshirt();
const decoratedTShirt = new ProductStampDecorator(tShirt);
const decoratedTShirt2 = new ProductStampDecorator(decoratedTShirt);
const customizedTShirt = new ProductCustomizationDecorator(decoratedTShirt);
console.log(tShirt.getPrice(), tShirt.getName());
console.log(decoratedTShirt.getPrice(), decoratedTShirt.getName());
console.log(decoratedTShirt2.getPrice(), decoratedTShirt2.getName());
console.log(customizedTShirt.getPrice(), customizedTShirt.getName());
