const fs = require("fs")

class InstrumentoCrud {
  constructor() {
    this.filePath = "./src/files/instrumentos.json"
  }

  criarInstrumento(instrumento) {
    try {
      const instrumentos = JSON.parse(fs.readFileSync(this.filePath, "utf-8"))
      instrumentos.push({
        nome: instrumento.nome,
        codigo: instrumento.codigo,
        tipo: instrumento.tipo,
        estado: instrumento.estado,
      })
      fs.writeFileSync(
        this.filePath,
        JSON.stringify(instrumentos, null, 2),
        "utf-8"
      )
      console.log("Instrumento criado com sucesso!")
    } catch (error) {
      console.error("Erro ao criar o instrumento:", error)
    }
  }

  deletarInstrumento(codigo) {
    try {
      let instrumentos = JSON.parse(fs.readFileSync(this.filePath, "utf-8"))
      instrumentos = instrumentos.filter(
        (instrumento) => instrumento.codigo !== codigo
      )
      fs.writeFileSync(
        this.filePath,
        JSON.stringify(instrumentos, null, 2),
        "utf-8"
      )
      console.log("Instrumento deletado com sucesso!")
    } catch (error) {
      console.error("Erro ao deletar o instrumento:", error)
    }
  }

  consultarInstrumento(nome) {
    try {
      const instrumentos = JSON.parse(fs.readFileSync(this.filePath, "utf-8"))

      if (nome.toLowerCase() === "todos") {
        return instrumentos
      } else {
        const instrumentoEncontrado = instrumentos.find(
          (instrumento) => instrumento.nome.toLowerCase() === nome.toLowerCase()
        )
        if (instrumentoEncontrado) {
          return [instrumentoEncontrado]
        } else {
          return []
        }
      }
    } catch (error) {
      console.error("Erro ao consultar os instrumentos:", error)
      return []
    }
  }

  alterarInstrumento(codigo, novoNome, novoTipo, novoEstado) {
    try {
      let instrumentos = JSON.parse(fs.readFileSync(this.filePath, "utf-8"))
      const index = instrumentos.findIndex(
        (instrumento) => instrumento.codigo === codigo
      )
      if (index !== -1) {
        instrumentos[index].nome = novoNome
        instrumentos[index].tipo = novoTipo
        instrumentos[index].estado = novoEstado
        fs.writeFileSync(
          this.filePath,
          JSON.stringify(instrumentos, null, 2),
          "utf-8"
        )
        console.log("Instrumento alterado com sucesso!")
      } else {
        console.log("Instrumento não encontrado com o código fornecido.")
      }
    } catch (error) {
      console.error("Erro ao alterar o instrumento:", error)
    }
  }
}

module.exports = InstrumentoCrud
