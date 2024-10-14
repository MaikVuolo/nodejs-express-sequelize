/* eslint-disable linebreak-style */
/* eslint-disable indent */
const dataSource = require('../database/models');
const Service = require('./Service.js');

class PessoaController extends Service {
    constructor(){
        super('Pessoa');
        this.matriculaService = new Service('Matricula');
    }
    async buscaMatriculaPorId(id){
        const estudante = await super.serviceBuscaPorId(id);
        const matriculas = await estudante.getAulasMatriculadas();
        
        return matriculas;
    }
    async buscaTodasMatriculasPorId(id){
        const estudante = await super.serviceBuscaPorId(id);
        const todasAsMatriculas = await estudante.getTodasAsMatriculadas();
        
        return todasAsMatriculas;
    }
    async buscaPorEscopo(){
        const listaPessoas = await super.pegaTodosPorScopo('todosPorScopo');
        return listaPessoas;
    }
    async cancelaRegistroMatriculaEstudante(estudanteId){
        return  dataSource.sequelize.transaction(async (transacao)=>
              {
                await super.serviceAtualiza({ ativo: false}, { id: estudanteId},transacao);
                await this.matriculaService.serviceAtualiza({ status: 'desligado'},{estudante_id: estudanteId},transacao);
            });
    }
}

module.exports = PessoaController;