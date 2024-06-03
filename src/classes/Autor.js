const crypto = require("crypto")

class Autor {
    
    #codigo = ""
    #nome = ""
    #generoLiterario = ""
    
    constructor (nome) {
        this.#codigo = crypto.randomUUID()
        this.#nome = nome
    }

    get getCodigo () {
        return this.#codigo
    }

    get getNome () {
        return this.#nome
    }

    set setNome (novoNome) {
        this.#nome = novoNome
    }


    get getGeneroLiterario () {
        return this.#generoLiterario
    }

    set setGeneroLiterario (novoGenero) {
        this.#generoLiterario = novoGenero
    }

}

module.exports = Autor