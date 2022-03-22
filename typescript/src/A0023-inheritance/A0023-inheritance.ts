export class Pessoa {
  constructor(
    public name: string,
    public lastname: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName(): string {
    return this.name + ' ' + this.lastname;
  }
}

export class Aluno extends Pessoa {
  constructor(
    name: string,
    lastname: string,
    age: number,
    cpf: string,
    public room: string,
  ) {
    super(name, lastname, age, cpf);
  }

  getFullName(): string {
    return 'Aluno: ' + this.name + ' ' + this.lastname;
  }
}

export class Cliente extends Pessoa {
  getNewAge(): string {
    return 'Idade: ' + super.getAge();
  }
  getFullName(): string {
    return 'Cliente: ' + this.name + ' ' + this.lastname;
  }

  //tenta acessar private
  testePrivate(): void {
    //return this.age; //private não é visível
    console.log(this.cpf); //protected é visível somente dentro das classes
  }
}

const aluno = new Aluno('Alexandre', 'Bueno', 48, '155.432.048-84', 'Sala 1');
const cliente = new Cliente('Zanza', 'Garcia', 47, '111.111.111-11');

console.log(aluno.getFullName());
console.log(cliente.getNewAge());
console.log(cliente.getFullName());
