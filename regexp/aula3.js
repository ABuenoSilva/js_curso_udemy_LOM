const { texto, arquivos, html } = require('./base');
/*
    * (opcional) 0 ou n {0,}
    + (obrigatório) 1 ou n {1,}
    ? (opacional) 0 ou 1 {0,1}
    \ escape caractere
    {n,m} //minimo e máximo de vezes
*/

//console.log(texto);
//const regExp1 = /Jo+ão+/gi;
//console.log(texto.match(regExp1));

const regExp2 = /\.jpe?g/gi;
for (const arquivo of arquivos) {
    console.log(arquivo.match(regExp2));
}