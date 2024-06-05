//VERIFICAR COMO VAI FICAR O TIMESTAMP OU A KEY PARA GERAR O CODIGO DO mas dar preferencia para o crypto require
// CRUD = create, read, update, delete
const readline = require("readline/promises");
const Livro = require("./classes/Livro");
const LivroCrud = require("./classes/LivroCrud");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function run() {
  const resposta = await rl.question(
    "Escolha uma ação (criar, deletar, alterar, consultar): "
  );

  switch (resposta) {
    case "criar":
      /* Coloque sua resposta aqui  */
      const nome = await rl.question("Qual o nome do livro?");
      const quantidadePaginas = await rl.question(
        "Quantas páginas tem o livro?"
      );
      const generoLiterario = await rl.question("Qal o genero literario?");
      const autor = await rl.question("Qual o nome do autor?");

      const livro = new Livro(nome);
      Livro.setQuantidadePaginas = quantidadePaginas;
      Livro.setGeneroLiterario = generoLiterario;
      Livro.setAutor = autor;

      const crud = new LivroCrud();
      crud.criar(livro);

      rl.close();
      break;
    case "deletar": {
      /* Coloque sua resposta aqui */
      rl.close();
      break;
    }
    case "consultar": {
      /* Coloque sua resposta aqui */
      const palavra = await rl.question("Qual livro quer ler?");
      const crud = new LivroCrud();
      crud.consultar(palavra);
      rl.close();
      break;
    }
    case "atualizar": {
    }
    default:
      console.log("Ação não reconhecida.");
      rl.close();
  }
}

run();
