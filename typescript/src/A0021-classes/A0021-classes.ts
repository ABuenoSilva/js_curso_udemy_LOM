export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    this.colaboradores.forEach((colab) => console.log(colab));
  }
}

const empresa1 = new Empresa('Bueno', '123456');
console.log(empresa1);
const colaborador1 = new Colaborador('Alexandre', 'Bueno');
const colaborador2 = new Colaborador('Zanza', 'Garcia');
const colaborador3 = new Colaborador('Luzia', 'Bornal');
empresa1.adicionaColaborador(colaborador1);
console.log(empresa1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1);

empresa1.mostrarColaboradores();
