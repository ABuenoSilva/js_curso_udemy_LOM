import { TaxVisitorProtocol } from './tax-visitor-protocol';
import { VisitableProduct } from './visitable-product';

export class Cigarette extends VisitableProduct {
  constructor(protected price: number) {
    super('Cigarret', price);
  }
  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForCigarette(this);
  }
}
