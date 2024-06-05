//parte de criar no json vai ser feita na parte da classeCrud
//// importar o fs(fileSystem)ler aquirvo, manipular e devolver
// readFile(lê como json)
//antes da etapa abaixo
// fs.writeFileSync(
//     this.filePath,
//     JSON.stringify{conteudoAtual, null, 2},  --Para escrever no formato de string--
//     'utf-8'
// )
// JSON.parse pega um array e transforma em arquivo
// metodo .push joga o objeto dentro do array
const fs = require("fs");
class LivroCrud {
  constructor() {
    this.filePath = "./src/files/livros.json";
  }

  consultar(palavra) {
    const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, "utf-8"));
  }
  criar(livro) {
    // ler tudo dentro do arquivi json
    const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, "utf-8"));

    // insere dentro do array recuperado o objeto de livros
    conteudoAtual.push({
      codigo: livro.getCodigo,
      nome: livro.getNome,
      quantidadePaginas: livro.getQuantidadePaginas,
      autor: livro.getAutor,
    });

    // Escreve no arquivo
    fs.writeFileSync(
      // Onde o FileSystem vai escrever
      this.filePath,
      JSON.stringify(conteudoAtual, null, 2),
      "utf-8"
    );
  }
}

module.exports = LivroCrud;
