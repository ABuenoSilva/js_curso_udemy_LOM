export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public name: string,
    public lastname: string,
    public age: number,
    public cpf: string,
  ) {}

  getFullName(): string {
    return this.name + ' ' + this.lastname;
  }

  static falaOi(): void {
    console.log('Oi');
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa = new Pessoa('Alexandre', 'Bueno', 48, '111.111.111-11');
const pessoa1 = Pessoa.criaPessoa('Zanza', 'Garcia');
console.log(pessoa);
console.log(pessoa1);
Pessoa.falaOi();
