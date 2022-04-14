import {
  Discount,
  FiftyPercentDiscount,
  TenPercentDiscount,
  NoDiscount,
} from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should have no discount', () => {
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10.99)).toBe(10.99);
  });

  it('Should apply 50% discount', () => {
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(150)).toBeCloseTo(75);
  });

  it('Should apply 10% discount', () => {
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(100)).toBeCloseTo(90);
  });
});
