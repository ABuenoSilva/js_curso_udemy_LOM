import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should return undefined', () => {
    const sut = createSut();
    expect(sut.sendMessage('Olá')).toBeUndefined();
  });

  it('Should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('Olá');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('Should call console.log with Pedido salvo com sucesso...', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('olá');
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada', 'olá');
  });
});
