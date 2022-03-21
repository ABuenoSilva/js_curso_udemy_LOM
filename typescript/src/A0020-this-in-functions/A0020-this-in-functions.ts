// import './form-control';

export function funcao(this: Date, argumento1: string): void {
  console.log(this);
  console.log(argumento1);
}

funcao.call(new Date(), 'Bueno');
funcao.apply(new Date(), ['Alexandre']);
