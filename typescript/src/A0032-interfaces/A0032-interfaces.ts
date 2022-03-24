interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

interface TipoPessoa extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}
  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export const pessoa = new Pessoa('Alexandre', 'Bueno');
console.log(pessoa.nomeCompleto());
