import { Customer } from '../customer/customer';
import { IndividualCustomer } from '../customer/individual-customer';
import { IndividualCar } from '../vehicles/individual-car';
import { Vehicle } from '../vehicles/vehicle';
import { CreateCustomerVehicleFactory } from './customer-vehicle-factory';

export class IndividualCreateCustomerVehicleFactory
  implements CreateCustomerVehicleFactory
{
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, customer);
  }
}
