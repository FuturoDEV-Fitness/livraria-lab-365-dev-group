const fs = require('fs')

class LivroCrud {

    constructor() {
        this.filePath = './src/files/livros.json';
    }

    consultar(pesquisa) {
        const livros = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))

        const livroEncontrado = livros.find(
            livro => livro.nome === pesquisa
        )

        if (livroEncontrado) {
            console.log(livroEncontrado)
        } else {
            console.log("Título de Livro Inexistente")
        }

    }

     criar(livro) {

        const livros = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))

        livros.push({
            codigo: livro.getCodigo,
            nome: livro.getNome,
            quantidadePaginas: livro.getQuantidadePaginas,
            genero: livro.getGenero,
            autor: livro.getAutor
        })

        fs.writeFileSync(
            this.filePath,
            JSON.stringify(livros),
            'utf-8'
        )
    }

}

module.exports = LivroCrud;