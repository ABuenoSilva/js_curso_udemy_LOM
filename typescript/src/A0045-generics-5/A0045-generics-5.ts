// exemplo inferencia automatica
/*
export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

const pessoa1 = new Pessoa('Ale', 48);
const pessoa2 = new Pessoa(365, 'Undefined');

console.log(pessoa1, pessoa2);
*/

export class Stack<T> {
  private count = 0;
  private elements: { [a: number]: T } = {};

  push(element: T): void {
    this.elements[this.count] = element;
    this.count++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;
    this.count--;
    const value: T = this.elements[this.count];
    delete this.elements[this.count];
    return value;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }
}

//sem tipo não tem inferencia automatica
const pilha = new Stack<number>();
pilha.push(1);
//pilha.push('2');
//pilha.push(false);
pilha.push(2);
pilha.push(3);

console.log(pilha.pop());
console.log(pilha.pop());
console.log(pilha.pop());
console.log(pilha.pop());
