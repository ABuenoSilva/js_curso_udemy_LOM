import { MyDataStructure } from './my-data-structure';
import { MyReverseIterator } from './my-reverse-iterator';

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F');

const [a, b] = dataStructure;
console.log(a, b);

console.log('======');

for (const data of dataStructure) {
  console.log(data);
}

console.log('======');

dataStructure.resetInterator();

for (const data of dataStructure) {
  console.log(data);
}

console.log('======');

dataStructure.changeIterator(new MyReverseIterator(dataStructure));
console.log('REVERSE');

for (const data of dataStructure) {
  console.log(data);
}
