const fs = require('fs')

class AutorCrud {
    constructor() {
        this.filePath = './src/files/autor.json';
    }

    consultar(pesquisa) {
        const autores = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))

        const autorEcontrado = autores.find(autor => autor.autor === pesquisa)

        if (autorEcontrado) {
            console.log(autorEcontrado)
        } else {
            console.log("Não encontrado")
        }

    }

    criar(autor) {

        const autores = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))

        autores.push({
            codigo: autor.getCodigo,
            autor: autor.getNome,
            generoLiterario: autor.getGeneroLiterario
        })

        fs.writeFileSync(
            this.filePath,
            JSON.stringify(autores),
            'utf-8'
        )
    }

    deletar(codigo) {
        const autores = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))
        const autorEcontrado = autores.find(autor => autor.codigo === codigo)


        if (autorEcontrado) {
            const novoConteudo = autores.filter(autor => autor.codigo !== codigo)
            fs.writeFileSync(this.filePath,
                JSON.stringify(novoConteudo), 'utf-8'
            )

        } else {
            console.log("Autor não encontrado")
        }

    }

}

module.exports = AutorCrud;
