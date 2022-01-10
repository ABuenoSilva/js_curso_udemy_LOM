function Pessoa(nome, sobrenome) {

    //atributos e metodos internos (privadas)
    const Id = '12345';
    const metodoInterno = () => {};

    //atributos e metodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.print = () => console.log(`Sou ${nome} ${sobrenome}`);
}

const p1 = new Pessoa('Alexandre', 'Bueno');
const p2 = new Pessoa('Zanza', 'Garcia');

p1.print();
p2.print();