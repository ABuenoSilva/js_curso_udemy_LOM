export class Pessoa {
  constructor(
    private name: string,
    private lastname: string,
    private age: number,
    protected _cpf: string,
  ) {}

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getAge(): number {
    return this.age;
  }

  get cpf(): string {
    return this._cpf;
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  getFullName(): string {
    return this.name + ' ' + this.lastname;
  }
}

const pessoa = new Pessoa('Alexandre', 'Bueno', 48, '111.111.111-11');
console.log(pessoa);
pessoa.setName('Ale');
console.log(pessoa);
pessoa.cpf = '222.222.222-22';
console.log(pessoa);
