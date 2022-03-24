interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly endereco: readonly string[];
}

interface Pessoa {
  idade?: number;
}

export const pessoa: Pessoa = {
  nome: 'Alexandre',
  sobrenome: 'Bueno',
  endereco: ['Casa 1', 'Casa2'],
};
