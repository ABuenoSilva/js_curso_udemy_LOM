import { Customer } from '../customer/customer';
import { Vehicle } from '../vehicles/vehicle';

export interface CreateCustomerVehicleFactory {
  createCustomer(customerName: string): Customer;
  createVehicle(vehicleName: string, customerName: string): Vehicle;
}
