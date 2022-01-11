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

esperaAi('Conexão com BD',rand(1,5))
    .then( resposta => {
        console.log(resposta);
        return esperaAi(0, rand(1,5))
            .then( resposta => {
                console.log(resposta);
            } );
    })
    .catch( erro => console.log(erro));

console.log('Olá!!!!');