//Numeros = 48 a 57
//Maiusculas = 65 a 90
//Minuscuals = 97 a 122
function randNumber(min, max, inclusive = false) {
    let inc = inclusive ? 1 : 0;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + inc)) + min;
}

function randChar(max, min) {
    return String.fromCharCode(randNumber(max, min, true));
}

export default function geraSenha(qtde, maiusculas = false, minusculas = false, numeros = false, simbolos = false) {
    
    const tipos = [];
    const charSimbolo  = ',.;~^[]{}!@#$%¨*()_+=-';

    if(maiusculas) tipos.push( () => randChar(65, 90));
    if(minusculas) tipos.push( () => randChar(97, 122));
    if(numeros) tipos.push( () => randChar(48, 57));
    if(simbolos) tipos.push( () => charSimbolo[randNumber(0, charSimbolo.length)]);

    let senha = '';

    try {
        for(let i=0; i < qtde; i++) {
            senha += tipos[randNumber(0, tipos.length)]();
        }    
    } finally {
        return senha;
    }

}
