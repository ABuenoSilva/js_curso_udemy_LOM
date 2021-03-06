import { DeliveryFlyweight } from './delivery-flyweight';
import { DeliveryLocation } from './delivery-location';
import {
  DeliveryLocationData,
  DeliveryLocationDictionary,
} from './delivery-types';

export class DeliveryFactory {
  private locations: DeliveryLocationDictionary = {};

  private createId(data: DeliveryLocationData): string {
    return Object.values(data)
      .map((item) => {
        item.replace(/\s+/, '').toLowerCase();
      })
      .join('_');
  }

  makeLocation(intrisicState: DeliveryLocationData): DeliveryFlyweight {
    const key = this.createId(intrisicState);
    if (!(key in this.locations))
      this.locations[key] = new DeliveryLocation(intrisicState);
    return this.locations[key];
  }

  getLocations(): DeliveryLocationDictionary {
    return this.locations;
  }
}
