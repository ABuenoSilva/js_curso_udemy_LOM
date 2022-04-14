import { EnterpriseCustomer, IndividualCustomer } from './customer';

const createIndividualCostumer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCostumer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('Individual Costumer', () => {
  it('Should have firstName, lastName and cpf', () => {
    const sut = createIndividualCostumer('Ale', 'Bueno', '15543204884');
    expect(sut).toHaveProperty('firstName', 'Ale');
    expect(sut).toHaveProperty('lastName', 'Bueno');
    expect(sut).toHaveProperty('cpf', '15543204884');
  });

  it('Should have methods to get name and idn', () => {
    const sut = createIndividualCostumer('Ale', 'Bueno', '15543204884');
    expect(sut.getName()).toBe('Ale Bueno');
    expect(sut.getIDN()).toBe('15543204884');
  });
});

describe('Enterprise Costumer', () => {
  it('Should have name and cnpj', () => {
    const sut = createEnterpriseCostumer('Alexandre', '15543204884');
    expect(sut).toHaveProperty('name', 'Alexandre');
    expect(sut).toHaveProperty('cnpj', '15543204884');
  });

  it('Should have methods to get name and idn', () => {
    const sut = createEnterpriseCostumer('Ale', '15543204884');
    expect(sut.getName()).toBe('Ale');
    expect(sut.getIDN()).toBe('15543204884');
  });
});
