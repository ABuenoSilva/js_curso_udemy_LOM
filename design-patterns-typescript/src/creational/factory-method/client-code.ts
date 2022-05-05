import { randomCarAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';

const customerNames = ['Ana', 'Joana', 'Elena', 'João', 'Bueno'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
}
