type Idade = number;
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;
type Pessoa = {
  nome: string;
  idade: Idade;
  salário: number;
  corPreferida?: CorPreferida;
};

const pessoa: Pessoa = {
  nome: 'Bueno',
  idade: 49,
  salário: 1,
};

console.log(pessoa);
console.log(setCorPreferida(pessoa, 'Azul'));

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}
