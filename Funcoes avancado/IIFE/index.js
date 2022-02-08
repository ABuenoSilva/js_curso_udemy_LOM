// IIFE - Imeediately invoked function expression
(function (sobrenome) {
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(criaNome('Alexandre'));
    }
    falaNome();

})('Bueno');

const nome = 'Qualquer coisa';
