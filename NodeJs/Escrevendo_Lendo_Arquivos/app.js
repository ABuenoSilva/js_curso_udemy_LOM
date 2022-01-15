const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

const pessoas = [
    {nome: 'João'},
    {nome: 'Maria'},
    {nome: 'Eduardo'},
    {nome: 'Luzia'}
];

async function lerArq (caminhoArquivo) {
    const dados = await ler(caminhoArquivo);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(valor => {
        console.log(valor);
    });
}

const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, json);
lerArq(caminhoArquivo);