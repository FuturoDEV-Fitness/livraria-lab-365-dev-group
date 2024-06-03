const readline = require('readline/promises');
const Autor = require('./classes/Autor');
const AutorCrud = require('./classes/AutorCrud');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function run() {

    const resposta = await rl.question('Escolha uma ação (criar, deletar, alterar, consultar): ');

    switch (resposta) {
        case 'criar':
            const nomeAutor = await rl.question("Qual o nome do autor? ")
            
            const autor = new Autor(nomeAutor)

            const generoLiterario = await rl.question('Genero Literário?')
            autor.setGeneroLiterario = generoLiterario

            const crud = new AutorCrud()
            crud.criar(autor)


            rl.close();
            break;
        case 'deletar': {
            const codigo = await rl.question("Informe o código do autor a ser deletado.")

            const crud = new AutorCrud()
            crud.deletar(codigo)

            rl.close();
            break;
        }
        case 'consultar': {
            const pesquisa = await rl.question('Qual autor deseja encontrar?')

            const crud = new AutorCrud()
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
