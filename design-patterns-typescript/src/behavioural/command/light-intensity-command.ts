import { SamrtHouseCommand } from './command';
import { SmartHouseLight } from './smart-house-light';

export class LightIntensityCommand implements SamrtHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}

  execute(): void {
    const intensity = this.light.increaseIntensity();
    console.log(`Insidade de ${this.light.name} é ${intensity}`);
  }

  undo(): void {
    const intensity = this.light.decreaseIntensity();
    console.log(`Insidade de ${this.light.name} é ${intensity}`);
  }
}
