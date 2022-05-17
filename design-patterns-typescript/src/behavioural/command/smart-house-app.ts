import { SamrtHouseCommand } from './command';

export class SmartHouseApp {
  private commands: { [k: string]: SamrtHouseCommand } = {};

  addCommand(key: string, command: SamrtHouseCommand) {
    this.commands[key] = command;
  }

  executeCommand(key: string): void {
    this.commands[key].execute();
  }
  undoCommand(key: string): void {
    this.commands[key].undo();
  }
}
