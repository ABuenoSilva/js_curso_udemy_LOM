import { AlcoholicDrink } from './alcoholic-drink';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { TaxVisitorProtocol } from './tax-visitor-protocol';

export class BrazilTaxVisitor implements TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number {
    return food.getPrice() * 1.05;
  }
  calculateTaxesForCigarette(cigarette: Cigarette): number {
    return cigarette.getPrice() * 2.5;
  }
  calculateTaxesForAlcoholicDring(alcoholicDrink: AlcoholicDrink): number {
    return alcoholicDrink.getPrice() * 1.5;
  }
}
