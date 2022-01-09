const pessoa = {
    nome: 'Alexandre',
    sobrenome: 'Bueno',
    idade: 48,
    endereco: {
        rua: 'Eça de Queiros',
        numero: 37
    }
}
/*
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.endereco.numero);
*/
//Atribuicao via desestruturacao
const { nome, idade, profissao="nao existe" } = pessoa;
console.log(nome, idade, profissao);

const { nome: nomeNovo, endereco: { rua }, endereco } = pessoa;
console.log(nomeNovo, rua, endereco);

const { nome: outroNome, sobrenome, ...resto} = pessoa;
console.log(outroNome, sobrenome, resto);