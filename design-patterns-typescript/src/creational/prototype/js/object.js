const personPrototype = {
  firstName: 'Alexandre',
  lastName: 'Bueno',
  age: 49,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
