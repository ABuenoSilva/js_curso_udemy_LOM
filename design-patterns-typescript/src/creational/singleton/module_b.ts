import { MyDataBaseModule } from './db/my-database-module';
import { myDataBaseClassic as myDataBaseModuleFromModuleA } from './module_a';

const myDataBaseModule = MyDataBaseModule;
myDataBaseModule.add({ name: 'Luzia', age: 74 });

console.log(myDataBaseModule === myDataBaseModuleFromModuleA);
