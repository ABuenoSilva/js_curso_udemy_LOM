import { MyDataBaseModule } from './db/my-database-module';

const myDataBaseClassic = MyDataBaseModule;
myDataBaseClassic.add({ name: 'Bueno', age: 48 });
myDataBaseClassic.add({ name: 'Zanza', age: 47 });
myDataBaseClassic.add({ name: 'Felipe', age: 24 });

export { myDataBaseClassic };
