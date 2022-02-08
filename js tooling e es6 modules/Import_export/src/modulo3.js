const caes = ['Bob', 'Belinha'];
const passaros = ['Theo', 'Zeca', 'Snoopy'];
const coelhos = ['Thomas'];

const varPrivada = 'Nada pra fora';

//default no corpo
/*
export default function mult(x, y) {
    return x * y;
}
*/
//default no export

function mult(x, y) {
    return x * y;
}

export { caes, passaros, coelhos, mult as default };