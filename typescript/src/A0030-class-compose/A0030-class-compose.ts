export class Carro {
  private readonly motor: Motor = new Motor();
  ligar(): void {
    this.motor.ligar();
  }
  desligar(): void {
    this.motor.desligar();
  }
  acelerar(): void {
    this.motor.acelerar();
  }
  parar(): void {
    this.motor.parar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor está ligado');
  }
  desligar(): void {
    console.log('Motor está desligado');
  }
  acelerar(): void {
    console.log('Motor está acelerando');
  }
  parar(): void {
    console.log('Motor está parado');
  }
}

const carro = new Carro();

carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();
