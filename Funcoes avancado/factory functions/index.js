function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        get nomeCompleto () {
            return `${this.nome} ${this.sobrenome}`;
        },
        set nomeCompleto (valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala (assunto) {
            return `${this.nome} está ${assunto}`;
        },
        altura,
        peso,
        get imc() {
            const indice = this.peso / this.altura ** 2;
            return indice.toFixed(2);
        }

    }
}

const p1 = criaPessoa('Alexandre', 'Bueno', 1.82, 90);
const p2 = criaPessoa('Zanza', 'Garcia', 1.65, 60);
console.log(p1.fala('estudando'));
console.log(p1.imc);
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Alex Bueno da Silva';
console.log(p1.nomeCompleto);
console.log(p2.fala('assistindo novela'));
console.log(p2.imc);