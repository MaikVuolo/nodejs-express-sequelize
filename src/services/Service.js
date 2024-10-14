/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const dataSource = require('../database/models');

class Service {
  constructor (nomeModelo){
    this.model = nomeModelo;
  }
  async pegaTodosOsModelos(where = {}){
    return await dataSource[this.model].findAll({where: {...where}});
  }
  async pegaTodosPorScopo(escopo){
    const listaPessoas = await dataSource[this.model].scope(escopo).findAll();
    return listaPessoas;
   
  }
  async servicePegaEConta(options){
    const listaEConta = await dataSource[this.model].findAndCountAll({ ...options });
    return listaEConta;
  }

  async serviceAtualiza(novosDados,where,transacao = {}){
    const listaDeAtualizacao = await dataSource[this.model].update(novosDados,{
      where:{...where},
      transaction: transacao
    });
    if(listaDeAtualizacao[0] === 0){
      return false;
    }
    return true;
  }
  async serviceBuscaPorParametro(where){
    return dataSource[this.model].findOne({where:{...where}});
  }
  async serviceBuscaPorId(id){
    return dataSource[this.model].findByPk(id);
  }
  async criandoNovo(dadosFornecidos){
    return dataSource[this.model].create(dadosFornecidos);
  }
  async deleteId(id){
    return dataSource[this.model].destroy({where :{ id: id }});
  }
  async restauraId(id){
    return dataSource[this.model].restore({where :{ id: id }});
  }
}

module.exports = Service;