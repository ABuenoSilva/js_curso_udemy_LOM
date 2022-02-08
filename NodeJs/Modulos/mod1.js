const nome = 'Alexandre';
const sobrenome = 'Bueno';

const falaNome = () => console.log(nome, sobrenome);

/*
module.exports.nome = nome;
module.exports.sobre = sobrenome;
module.exports.falaNome = falaNome;
*/

/*
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
*/

module.exports = {
    nome,
    sobrenome,
    falaNome
}

this.qualquerCoisa = 'Qualquer coisa';

