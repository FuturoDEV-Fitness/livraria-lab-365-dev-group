const crypto = require('crypto');

class Leitor {
    #codigo;
    #nome;
    #rg;
    #cpf;
    #dataNascimento;

    constructor(nome, rg, cpf, dataNascimento) {
        this.#codigo = crypto.randomUUID();
        this.#nome = nome;
        this.#rg = rg;
        this.#cpf = cpf;
        this.#dataNascimento = dataNascimento;
    }

    get codigo() {
        return this.#codigo;
    }

    get nome() {
        return this.#nome;
    }

    get rg() {
        return this.#rg;
    }

    get cpf() {
        return this.#cpf;
    }

    get dataNascimento() {
        return this.#dataNascimento;
    }

    set nome(nome) {
        this.#nome = nome;
    }

    set rg(rg) {
        this.#rg = rg;
    }

    set cpf(cpf) {
        this.#cpf = cpf;
    }

    set dataNascimento(dataNascimento) {
        this.#dataNascimento = dataNascimento;
    }

    toJSON() {
        return {
            codigo: this.#codigo,
            nome: this.#nome,
            rg: this.#rg,
            cpf: this.#cpf,
            dataNascimento: this.#dataNascimento
        };
    }
}

module.exports = Leitor;
