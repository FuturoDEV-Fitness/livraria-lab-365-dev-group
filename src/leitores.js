const readline = require('readline/promises');
const Leitor = require('./classes/Leitor');
const LeitorCrud = require('./classes/LeitorCrud');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function run() {
    const leitorCrud = new LeitorCrud();
    const resposta = await rl.question('Escolha uma ação (criar, deletar, consultar): ');

    switch (resposta.toLowerCase()) {
        case 'criar': {
            try {
                const nome = await rl.question('Digite o nome do leitor: ');
                const rg = await rl.question('Digite o número de RG do leitor: ');
                const cpf = await rl.question('Digite o número de CPF do leitor: ');
                const dataNascimento = await rl.question('Digite a data de nascimento do leitor: ');

                const leitor = new Leitor(nome, rg, cpf, dataNascimento);
                leitorCrud.criar(leitor);

                console.log('Leitor criado com sucesso:', leitor);
            } catch (error) {
                console.error('Erro ao criar leitor:', error);
            } finally {
                rl.close();
            }
            break;
        }
        case 'deletar': {
            try {
                const codigo = await rl.question('Qual o código do leitor a ser deletado? ');
                const deletado = leitorCrud.deletar(codigo);

                if (deletado) {
                    console.log('Leitor deletado com sucesso.');
                } else {
                    console.log('Leitor não encontrado.');
                }
            } catch (error) {
                console.error('Erro ao deletar leitor:', error);
            } finally {
                rl.close();
            }
            break;
        }
        case 'consultar': {
            try {
                const codigo = await rl.question('Qual é o código do leitor? ');
                const leitor = leitorCrud.consultar(codigo);

                if (leitor) {
                    console.log('Leitor encontrado:', leitor);
                } else {
                    console.log('Leitor não encontrado.');
                }
            } catch (error) {
                console.error('Erro ao consultar leitor:', error);
            } finally {
                rl.close();
            }
            break;
        }
        default:
            console.log('Ação não reconhecida.');
            rl.close();
    }
}

run().catch(err => {
    console.error(err);
    rl.close();
});
