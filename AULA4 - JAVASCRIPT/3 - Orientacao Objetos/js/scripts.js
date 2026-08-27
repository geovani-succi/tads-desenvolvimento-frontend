// Definição da Classe
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
}
// Instanciação do Objeto
const user = new Pessoa("Geovani", 30);
user.apresentar();
// Saída: Olá, meu nome é Geovani
