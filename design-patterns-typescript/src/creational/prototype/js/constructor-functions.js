function Person(name, lastName, age) {
  this.firstName = name;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Alexandre',
  lastName: 'Bueno',
  age: 49,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);
