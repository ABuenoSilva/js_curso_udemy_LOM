xdescribe('Primitive values', () => {
  const number = 10;
  it('should test jest assertions part 1', () => {
    expect(number).toBe(10);
    expect(number).toEqual(10);

    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();
  });
  it('should test jest assertions part 2', () => {
    expect(number).toBeGreaterThan(9);
    expect(number).toBeGreaterThanOrEqual(10);
    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);

    expect(number).toBeCloseTo(10.001);
    expect(number).toBeCloseTo(9.996);

    expect(number).not.toBeNull();

    expect(number).toHaveProperty('toString');
  });
});

xdescribe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Ale', age: 48 };
    const anotherPerson = { ...person };

    //toBe falha com objetos
    //expect(person).toBe(anotherPerson);
    expect(person).toEqual(anotherPerson);

    expect(person).toHaveProperty('age');
    expect(person).toHaveProperty('age', 48);

    expect(person.name).toBe('Ale');
  });
});
