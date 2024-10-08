/* eslint-disable linebreak-style */
/* eslint-disable indent */
const Service = require('./Service.js');

class PessoaController extends Service {
    constructor(){
        super('Pessoa');
    }
    async buscaMatriculaPorId(id){
        const estudante = await super.serviceBuscaPorId(id);
        const matriculas = await estudante.getAulasMatriculadas();
        
        return matriculas;
    }
}

module.exports = PessoaController;