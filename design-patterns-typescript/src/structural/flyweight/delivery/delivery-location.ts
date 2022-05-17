import { DeliveryFlyweight } from './delivery-flyweight';
import { DeliveryLocationData } from './delivery-types';

export class DeliveryLocation implements DeliveryFlyweight {
  constructor(private readonly intrisicState: DeliveryLocationData) {}
  deliver(name: string, number: string): void {
    console.log('Entrega para %s', name);
    console.log('Numero: ', number);
    console.log('Em', this.intrisicState.street, this.intrisicState.city);
    console.log('###');
  }
}
