type TipoNome = {
  nome: string;
};

type TipoSobrenome = { sobrenome: string };

type TipoNomeCompleto = { nomeCompleto: () => string };

class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  constructor(public nome: string, public sobrenome: string) {}
  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export const pessoa = new Pessoa('Alexandre', 'Bueno');
console.log(pessoa.nomeCompleto());
