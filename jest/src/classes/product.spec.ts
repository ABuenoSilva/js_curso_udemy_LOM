import { Product } from './product';

const createSut = (name: string, price: number) => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should have properties name and price', () => {
    const sut = createSut('Lápis', 1.5);
    expect(sut).toHaveProperty('name', 'Lápis');
    expect(sut).toHaveProperty('price', 1.5);
    expect(sut.price).toBeCloseTo(1.49, 1);
  });
});
