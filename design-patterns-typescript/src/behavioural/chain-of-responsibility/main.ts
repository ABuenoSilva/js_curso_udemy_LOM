import { CEOBudgetHandler } from './ceo-budget-handler';
import { CustomerBudget } from './customer-budget';
import { DirecotrBudgetHandler } from './director-budget-handler';
import { ManagerBudgetHandler } from './manager-budget-handler';
import { SellerBudgetHandler } from './seller-budget-handler';

const customerBudget = new CustomerBudget(50010);
const seller = new SellerBudgetHandler();

seller
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new DirecotrBudgetHandler())
  .setNextHandler(new CEOBudgetHandler());

seller.handle(customerBudget);
console.log(customerBudget);
