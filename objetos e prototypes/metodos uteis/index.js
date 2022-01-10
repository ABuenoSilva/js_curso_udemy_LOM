//Object.keys (retorna as chaves)
//Object.values (retorna os valores)
//Object.entries (retorna os pares chave/valor)
//Object.freeze (congela o objeto)
//Object.defineProperty (define uma propriedade)
//Object.defineProperties (define várias propridades)
//Object.getOwnPropertyDescriptor (retorna as propriedades de um atributo)
//Object.assign (atribui uma copia de um objeto para outro)
//...{} (spread)

const produto = { nome: 'Produto', preco: 1.8};
const caneca = Object.assign({}, produto);
caneca.preco = 10;
console.log(produto);
console.log(caneca);
console.log(Object.values(produto));
console.log(Object.entries(produto));