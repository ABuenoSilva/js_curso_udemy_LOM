export interface Prototype {
  clone(): Prototype;
}

export class Address implements Prototype {
  constructor(public street: string, public number: number) {}
  clone(): Address {
    return new Address(this.street, this.number);
  }
}

export class Person implements Prototype {
  public adresses: Address[] = [];
  constructor(public name: string, public age: number) {}
  clone(): Person {
    const newObj = new Person(this.name, this.age);
    newObj.adresses = this.adresses.map((item) => item.clone());
    return newObj;
  }

  addAddress(address: Address): void {
    this.adresses.push(address);
  }
}

const person1 = new Person('Alexandre', 49);
const address1 = new Address('Eça', 37);
person1.addAddress(address1);

const person2 = person1.clone();
console.log(person1);
console.log(person2);
console.log(person2.name);
person2.name = 'Zanza';
person1.adresses[0].street = 'Marcianos';
console.log(person1);
console.log(person2);
console.log(person2.name);

console.log(person2);
console.log(person2.adresses);
