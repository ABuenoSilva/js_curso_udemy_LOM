import { SamrtHouseCommand } from './command';
import { SmartHouseLight } from './smart-house-light';

export class LightPowerCommand implements SamrtHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}

  execute(): void {
    this.light.on();
  }

  undo(): void {
    this.light.off();
  }
}
