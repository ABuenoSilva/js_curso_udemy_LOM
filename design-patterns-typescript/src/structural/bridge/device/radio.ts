import { DeviceImplementation } from './device-implementation';

export class Radio implements DeviceImplementation {
  private volume = 5;
  private power = false;
  private name = 'Radio';

  getName(): string {
    return this.name;
  }

  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }

  getPower(): boolean {
    return this.power;
  }

  setVolume(volume: number): void {
    this.volume = volume;
    if (this.volume > 100) {
      this.volume = 100;
    } else if (this.volume < 0) {
      this.volume = 0;
    }
  }

  getVolume(): number {
    return this.volume;
  }
}
