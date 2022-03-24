export class Escritor {
  private _ferramenta: Ferramenta | null = null;
  constructor(private nome: string) {}

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (!this.ferramenta) {
      console.log('Não posso escrever sem ferramenta.');
    } else {
      this.ferramenta.escrever();
    }
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo...`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando...`);
  }
}

const eu = new Escritor('Alexandre');
const zanza = new Escritor('Zanza');
const maquina = new MaquinaEscrever('Olivetti');
const caneta = new Caneta('Bic');

eu.ferramenta = maquina;

eu.escrever();
zanza.escrever();

zanza.ferramenta = caneta;
zanza.escrever();
