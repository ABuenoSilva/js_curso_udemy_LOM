import { Customer } from '../customer/customer';
import { EnterpriseCustomer } from '../customer/enterprise-customer';
import { EnterpriseCar } from '../vehicles/enterprise-car';
import { Vehicle } from '../vehicles/vehicle';
import { CreateCustomerVehicleFactory } from './customer-vehicle-factory';

export class EnterpriseCreateCustomerVehicleFactory
  implements CreateCustomerVehicleFactory
{
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new EnterpriseCar(vehicleName, customer);
  }
}
