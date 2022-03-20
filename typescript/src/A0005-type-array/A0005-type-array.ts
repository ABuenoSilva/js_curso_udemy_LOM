//Array<T> ou T[]
export function multiplyArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

//tipagem da função por inferência
export function concatenaString(...args: string[]) {
  return args.reduce((ac, valor) => ac + valor + ' ');
}

export function toUpperCase(...args: string[]) {
  return args.map((valor) => valor.toUpperCase());
}

console.log(multiplyArgs(2, 3, 5));
console.log(concatenaString('1', '2', 'Bueno', 'Zanza'));
console.log(toUpperCase('a', 'b', 'c'));
