/*
let data = new Date(0); //timestamp Unix
console.log(data.toString());
data = new Date(); //Data/hora atual
console.log(data.toString());
data = new Date(2021, 3, 20, 15, 14, 17, 900); //definindo por numeros - a, m, d, h, min, s, ms //Mês vai de 0 a 11
console.log(data.toString());
data = new Date('2019-04-20T15:14:17'); //definindo por string - T pode ser um espaço em branco
console.log(data.toString());
console.log('Dia ', data.getDate());
console.log('Mês ', data.getMonth() + 1); //soma 1 pois começa do zero
console.log('Ano ', data.getFullYear());
console.log('Hora ', data.getHours());
console.log('Minutos ', data.getMinutes());
console.log('Segundos ', data.getSeconds());
console.log('Dia da Semana ', data.getDay()); //0 - domingo, 6 - sábado
console.log(Date.now()); //Milissegundos desde o timestamp Linux
*/
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());
    const segundos =  zeroAEsquerda(data.getSeconds());
    
    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;

}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
