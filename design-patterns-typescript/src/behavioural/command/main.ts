import { LightIntensityCommand } from './light-intensity-command';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';

//Receiver
const bedRoomLight = new SmartHouseLight('Luz quarto');
const bathRoomLight = new SmartHouseLight('Luz banheiro');
//Command
const bedroomLightPowerCommand = new LightPowerCommand(bedRoomLight);
const bedroomLightIntensityCommand = new LightIntensityCommand(bedRoomLight);
const bathroomLightPowerCommand = new LightPowerCommand(bathRoomLight);
//Contorle - Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand('btn-1', bedroomLightPowerCommand);
smartHouseApp.addCommand('btn-2', bathroomLightPowerCommand);
smartHouseApp.addCommand('btn-3', bedroomLightIntensityCommand);
smartHouseApp.executeCommand('btn-1');
smartHouseApp.executeCommand('btn-2');
smartHouseApp.executeCommand('btn-3');
smartHouseApp.undoCommand('btn-1');
smartHouseApp.undoCommand('btn-2');
smartHouseApp.undoCommand('btn-3');
