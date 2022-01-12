const nome = 'Alexandre';
const obj = { nome };
const novoObj = { ...obj };

console.log(novoObj);

const novo2 = { ...obj, sobrenome: 'Bueno', idade: 48};