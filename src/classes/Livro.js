const crypto = require("crypto")

class Livro {

    #codigo = ""
    #nome = ""
    #quantidadePaginas = 0
    #genero = ""
    #autor = ""

    constructor(nome) {
        this.#codigo = crypto.randomUUID()
        this.#nome = nome

    }

    get getCodigo() {
        return this.#codigo
    }

    get getNome() {
        return this.#nome
    }

    set setNome(novoNome) {
        this.#nome = novoNome
    }
    get getQuantidadePaginas() {
        return this.#quantidadePaginas
    }

    set setQuantidadePaginas(novaQuantidade) {
        this.#quantidadePaginas = novaQuantidade
    }
    get getGenero() {
        return this.#genero
    }

    set setGenero(novoGenero) {
        this.#genero = novoGenero
    }
    get getAutor() {
        return this.#autor
    }

    set setAutor(novoAutor) {
        this.#autor = novoAutor
    }

}

module.exports = Livro;