type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome | TemSobrenome | TemIdade;

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Bueno',
};

console.log(pessoa);

type Pessoa2 = TemNome & TemSobrenome & TemIdade;

const pessoa2: Pessoa2 = {
  nome: 'Bueno',
  idade: 30,
  sobrenome: 'Silva',
};

console.log(pessoa2);

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';

type Intersecao = AB & AC & AD;

export { pessoa };
