const crypto = require("crypto")

class Instrumento {
    #codigo = ""
    #nome = ""
    #tipo = ""
    #estado = ""

    constructor(nome) {
        this.#codigo = crypto.randomUUID()
        this.#nome = nome;
    }

    get codigo() {
        return this.#codigo;
    }

    get nome() {
        return this.#nome;
    }

    set nome(novoNome){
        this.#nome = novoNome
    }


    get tipo() {
        return this.#tipo;
    }

    
    set tipo(novoTipo){
        this.#tipo = novoTipo
    }

    get estado() {
        return this.#estado;
    }

    set estado(novoEstado){
        this.#estado = novoEstado
    }

}

module.exports = Instrumento;
