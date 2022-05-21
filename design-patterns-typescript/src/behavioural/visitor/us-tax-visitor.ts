import { AlcoholicDrink } from './alcoholic-drink';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { TaxVisitorProtocol } from './tax-visitor-protocol';

export class USTaxVisitor implements TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number {
    return food.getPrice() * 1.15;
  }
  calculateTaxesForCigarette(cigarette: Cigarette): number {
    return cigarette.getPrice() * 1.5;
  }
  calculateTaxesForAlcoholicDring(alcoholicDrink: AlcoholicDrink): number {
    return alcoholicDrink.getPrice() * 2.0;
  }
}
