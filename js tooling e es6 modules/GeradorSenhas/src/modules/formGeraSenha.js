import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const inputQtde = document.querySelector('#input-qtde');
const chkNumeros = document.querySelector('#chk-numeros');
const chkMaiusculas = document.querySelector('#chk-maiusculas');
const chkMinusculas = document.querySelector('#chk-minusculas');
const chkSimbolos = document.querySelector('#chk-simbolos');
const gerarSenha = document.querySelector('#gerar-senha');

export default () => {
    gerarSenha.addEventListener('click',() => {
        senhaGerada.innerHTML = gera();
    });
};

function gera() {
    return geraSenha(
        inputQtde.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
        ) || "Nada selecionado!";
}

