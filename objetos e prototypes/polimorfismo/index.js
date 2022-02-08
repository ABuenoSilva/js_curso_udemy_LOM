//Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor){
        this.verSaldo();
        console.log('Saldo insuficiente');
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(`Ag./c: ${this.agencia}/${this.conta}: ${this.saldo.toFixed(2)}`);
};

function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor) {
    if(this.saldo + this.limite < valor ){
        this.verSaldo();
        console.log('Saldo insuficiente');
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;


const conta1 = new CC('0017', '65961-6', 10000, 100);
console.log(conta1);
conta1.depositar(500);
conta1.sacar(5500);
conta1.sacar(5001);
conta1.sacar(100);

const conta2 = new CP('0017', '65961-6', 10000);
console.log(conta2);
conta2.depositar(500);
conta2.sacar(5500);
conta2.sacar(5001);

