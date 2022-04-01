interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno: PessoaProtocolo = {
  nome: 'Alexandre',
  sobrenome: 'Bueno',
  idade: 49,
};

const aluno2: PessoaProtocolo<number, string> = {
  nome: 123,
  sobrenome: 456,
  idade: 'não sei',
};

console.log(aluno);
console.log(aluno2);
