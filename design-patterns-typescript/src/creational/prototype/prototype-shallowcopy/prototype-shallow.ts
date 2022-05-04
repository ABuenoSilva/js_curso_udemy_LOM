export interface Prototype {
  clone(): Prototype;
}

export class Address {
  constructor(public street: string, public number: number) {}
}

export class Person implements Prototype {
  public adresses: Address[] = [];
  constructor(public name: string, public age: number) {}
  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }

  addAddress(address: Address): void {
    this.adresses.push(address);
  }
}

const person1 = new Person('Alexandre', 49);
const person2 = person1.clone();

console.log(person2);
console.log(person2.name);
person2.name = 'Zanza';
console.log(person2);
console.log(person2.name);
person1.addAddress({ street: 'Eça de Queiros', number: 37 });
console.log(person2);
console.log(person2.adresses);
