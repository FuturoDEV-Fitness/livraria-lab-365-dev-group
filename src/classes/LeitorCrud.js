const fs = require('fs');
const path = require('path');

class LeitorCrud {
    constructor() {
        this.filePath = path.resolve(__dirname, '../files/leitores.json');
    }

    getLeitores() {
        if (!fs.existsSync(this.filePath)) {
            return [];
        }
        const data = fs.readFileSync(this.filePath, 'utf8');
        return JSON.parse(data);
    }

    saveLeitores(leitores) {
        fs.writeFileSync(this.filePath, JSON.stringify(leitores, null, 2), 'utf8');
    }

    criar(leitor) {
        const leitores = this.getLeitores();
        leitores.push(leitor.toJSON());
        this.saveLeitores(leitores);
    }

    consultar(codigo) {
        const leitores = this.getLeitores();
        return leitores.find(leitor => leitor.codigo === codigo);
    }

    deletar(codigo) {
        let leitores = this.getLeitores();
        const index = leitores.findIndex(leitor => leitor.codigo === codigo);
        if (index !== -1) {
            leitores.splice(index, 1);
            this.saveLeitores(leitores);
            return true;
        }
        return false;
    }
}

module.exports = LeitorCrud;
