function esperaAi(msg, tempo) {
    return new Promise ( (resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE!!!');
        setTimeout( () => {
            resolve(msg);
        }, tempo);
    }); 
    
}

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function baixaPagina(cache) {
    let parValido = typeof cache === 'boolean';
    if(parValido) {
        if(cache) {
            return Promise.resolve('Página em cache');
        }
        else {
            return esperaAi('Baixando página',2000);
        }
    } else {
        return Promise.reject('Erro - parâmetro inválido');
    }
}

//Promise.all - recebe array com promessas ou valores já resolvidos e devolve um array com os  resultados após todos os processamentos
const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 3),
    esperaAi('Promise 2', 0.5),
    esperaAi('Promise 3', 1),
    'Outro valor'
];

Promise.all(promises)
    .then ( valor => console.log(valor) )
    .catch( erro => console.log(erro)); 

//Promise.race - recebe array com promessas e devolve o retorno da primeira promise a executar ou rejeitar
const promises2 = [
    esperaAi('Promise 1', 3),
    esperaAi('Promise 2', 3),
    esperaAi('Promise 3', 3)
];
Promise.race(promises2)
    .then ( valor => console.log(valor) )
    .catch( erro => console.log(erro)); 

//Promise.resolve e Promise.reject
baixaPagina(true)
    .then( resolve => console.log(resolve))
    .catch( erro => console.log(erro));

baixaPagina(false)
    .then( resolve => console.log(resolve))
    .catch( erro => console.log(erro));

baixaPagina(12)
    .then( resolve => console.log(resolve))
    .catch( erro => console.log(erro));

