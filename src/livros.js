const readline = require('readline/promises');
const Livro = require('./classes/Livro');
const LivroCrud = require('./classes/LivroCrud');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function run() {

    const resposta = await rl.question('Escolha uma ação (criar, deletar, alterar, consultar): ');

    switch (resposta) {
        case 'criar':
            const nomeLivro = await rl.question("Titulo do Livro? ")
            const livro = new Livro(nomeLivro)
            const quantidadePaginas = await rl.question("Quantidade de páginas? ")
            livro.setQuantidadePaginas = quantidadePaginas
            const genero = await rl.question("Qual o genero do livro? ")
            livro.setGenero = genero
            const autor = await rl.question("Qual é o autor do livro ")
            livro.setAutor = autor

            const crud = new LivroCrud()
            crud.criar(livro)

            rl.close();

            break;
        case 'deletar': {
            const codigo = await rl.question("Informe o código do Livro a ser deletado. " )

            const crud = new LivroCrud()
            crud.deletar(codigo)

            rl.close();
            break;
        }
        case 'consultar': {
            const pesquisa = await rl.question('Digite o Titulo do Livro que deseja encontrar. ' )

            const crud = new LivroCrud()
            crud.consultar(pesquisa)

            rl.close();
            break;
        }
        default:
            console.log("Ação não reconhecida.");
            rl.close();
    }

}

run();
