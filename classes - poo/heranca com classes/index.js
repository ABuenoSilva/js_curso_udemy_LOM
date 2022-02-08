class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    };

    ligar() {
        if(!this.ligado) this.ligado = true;
        else console.log(this.nome + ' já ligado.');
        return;
    };

    desligar() {
        if(this.ligado) this.ligado = false;
        else console.log(this.nome + ' já desligado.');
        return;
    }
};

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }

    ligar() {
        console.log('ligar do smart');
    }

    falaOi() {
        console.log('Oi');
    }
}

/*
const d1 = new DispositivoEletronico('Smartphone');
d1.ligar();
d1.ligar();
d1.desligar();
d1.desligar();
*/

const s1 = new Smartphone('Samsumg', 'Preto','S10');
console.log(s1);
s1.ligar();
s1.ligar();
s1.desligar();
s1.desligar();
s1.falaOi();