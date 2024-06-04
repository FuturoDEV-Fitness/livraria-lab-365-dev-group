const readline = require("readline/promises")
const Instrumento = require("./classes/Instrumento")
const InstrumentoCrud = require("./classes/IntrumentoCrud")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

async function run() {
  const resposta = await rl.question(
    "Escolha uma ação (criar, deletar, alterar, consultar): "
  )

  switch (resposta) {
    case "criar":
      const nomeCriar = await rl.question("Qual o nome do instrumento ? ")
      const instrumentoCriar = new Instrumento(nomeCriar)
      const tipoCriar = await rl.question("Qual o tipo do instrumento ? ")
      instrumentoCriar.tipo = tipoCriar
      const estadoCriar = await rl.question("Qual o estado do instrumento ? ")
      instrumentoCriar.estado = estadoCriar

      const novoInstrumentoCriar = new InstrumentoCrud()
      novoInstrumentoCriar.criarInstrumento(instrumentoCriar)
      rl.close()
      break

    case "deletar":
      const codigoDeletar = await rl.question(
        "Qual o código do instrumento que você deseja deletar? "
      )
      const instrumentoCrudDeletar = new InstrumentoCrud()
      instrumentoCrudDeletar.deletarInstrumento(codigoDeletar)
      rl.close()
      break

    case "consultar":
      const consulta = await rl.question(
        "Digite o nome do instrumento ou 'todos' para ver a lista completa: "
      )
      const instrumentoCrudConsultar = new InstrumentoCrud()

      const resultadoConsulta =
        instrumentoCrudConsultar.consultarInstrumento(consulta)

      // Verificando se houve resultados na consulta
      if (resultadoConsulta.length > 0) {
        console.log("Resultado da consulta:")
        resultadoConsulta.forEach((instrumento) => {
          console.log(
            `Nome: ${instrumento.nome}, Tipo: ${instrumento.tipo}, Estado: ${instrumento.estado}`
          )
        })
      } else {
        console.log("Nenhum resultado encontrado para a consulta.")
      }

      rl.close()
      break

    case "alterar":
      const codigoAlterar = await rl.question(
        "Qual o código do instrumento que você deseja alterar? "
      )
      const nomeAlterar = await rl.question(
        "Qual o novo nome do instrumento? "
      )
      const tipoAlterar = await rl.question(
        "Qual o novo tipo do instrumento? "
      )
      const estadoAlterar = await rl.question(
        "Qual o novo estado do instrumento? "
      )

      const instrumentoCrudAlterar = new InstrumentoCrud()
      instrumentoCrudAlterar.alterarInstrumento(
        codigoAlterar,
        nomeAlterar,
        tipoAlterar,
        estadoAlterar
      )
      rl.close()
      break

    default:
      console.log("Ação não reconhecida.")
      rl.close()
  }
}

run()
