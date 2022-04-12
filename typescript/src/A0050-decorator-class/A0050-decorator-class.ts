//Decoracao com o @
@decorator
export class Animal {
  constructor(public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  console.log('Estou no decorator');
  return class extends target {
    cor: string;
    constructor(...args: any[]) {
      super(...args);
      this.cor = args[0].split('').reverse().join('');
    }
  };
}

/* sem o @
const AnimalDecorated = decorator(Animal);
const animal = new AnimalDecorated('roxo');
*/
const animal = new Animal('roxo');
console.log(animal);
