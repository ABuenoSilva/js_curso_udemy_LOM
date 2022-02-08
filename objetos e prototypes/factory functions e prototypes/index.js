const falar = {
    falar() {
        console.log(`${nome} está falando.`);
    }
};
const comer = {
    comer() {
        console.log(`${nome} está comendo.`);
    }
};
const beber = {
    beber() {
        console.log(`${nome} está bebendo.`);
    }
};

const pessoaPrototype = {...falar, ...beber, ...comer};

function criaPessoa(nome, sobrenome) {

    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
};

const p1 = criaPessoa('Alexandre', 'Bueno');