//codigo, nome, quantidade de páginas, genero, autor

// const instrumentos = new Instrumento();
//             const nomeResposta = await rl.question('Digite o nome do instrumento: ');

// timestemp - Date.now() (não usar com api com muitas requisições), ou biblioteca crypto nativa do Node, só dar um require (ambos para gerar o codigo)

// classe livros e Livros crud : uma vai ficar com os atributos do leitor (como se fosse um model), a outra vai ficar as funções (como se fosse um controller)

const crypto = require("crypto");

class Livro {
  //  A cerquilha é para privar o atributo da classe
  #codigo = "";
  #nome = "";
  #quantidadePaginas = 0;
  #generoLiterario = "";
  #autor = "";

  constructor(nome) {
    this.#codigo = Math.random();
    this.#nome = nome;
  }
  //   pegar os atributos - ex: console.log(pessoa.getNome)
  get getCodigo() {
    return this.#codigo;
  }

  get getNome() {
    return this.#nome;
  }

  get getQuantidadePaginas() {
    return this.#quantidadePaginas;
  }

  get getGeneroLiterario() {
    return this.#generoLiterario;
  }

  get getAutor() {
    return this.#autor;
  }

  //   set altera o valor dos atributos - ex: henrique.setNome = Enrique
  set setNome(nome) {
    // this.#nome.replace.nome;
    this.#nome = nome;

    // GET E SET quando são chamados, são chamados sem o parenteses
  }

  set setQuantidadePaginas(quantidadePaginas) {
    this.#quantidadePaginas = quantidadePaginas;
  }

  set setGeneroLiterario(generoLiterario) {
    this.#generoLiterario;
  }

  set setAutor(autor) {
    this.#autor;
  }
  //   metodo s AQUI
}

module.exports = Livro;
