/*
CPF - primeiros 9 dígitos x sequencia desc a partir de 10
Exemplo
155.432.048-84
1  5  5  4  3  2  0  4  8
10 9  8  7  6  5  4  3  2
10+45+40+28+18+10+0+12+16 = 179
Subtrair de 11 o resto da divisao do resultado por 11
11 - (179 % 11) = 11 - 3 = 8
10 dígitos x sequencia desc a partir de 11
1  5  5  4  3  2  0  4  8  8
11 10 9  8  7  6  5  4  3  2
11+50+45+32+21+12+0+16+24+16 = 227
Subtrair de 11 o resto da divisao do resultado por 11
11 - (227 % 11) = 11 - 7 = 4
*/
function ValidaCpf(cpf) {
    this.cpf = cpf;
}

ValidaCpf.prototype.verifica = function() {
    
    let cpfLimpo = this.cpf.replace(/\D+/g,'');
    
    if(cpfLimpo.length !== 11) {
        console.log('Número de dígitos incorreto');
        return;
    }

    let arrayCPF = Array.from(cpfLimpo.slice(0,-2)).map( v => parseInt(v));

    //Calculo primeiro digito
    arrayCPF.push(this.calculaDigito(arrayCPF));
    //Calculo segundo digito
    arrayCPF.push(this.calculaDigito(arrayCPF));

    let cpfVerificado = arrayCPF.join('');

    if(cpfVerificado === cpfLimpo){
        console.log('CPF correto');
    } else {
        console.log('CPF incorreto');
    }

}

ValidaCpf.prototype.calculaDigito = function (cpf) {
    let mult = cpf.length + 1;
    let soma = cpf.map( (v,i) => v * (mult-i)).reduce( (a, v) => a + v);
    return 11 - (soma % 11);
}

const myCpf1 = new ValidaCpf('155.432.048-84');
myCpf1.verifica();
const myCpf2 = new ValidaCpf('155.432.048-83');
myCpf2.verifica();
