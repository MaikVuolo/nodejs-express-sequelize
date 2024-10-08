/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const dataSource = require('../database/models');

class Service {
  constructor (nomeModelo){
    this.model = nomeModelo;
  }
  async pegaTodosOsModelos(){
    return dataSource[this.model].findAll();
  }
  async serviceAtualiza(novosDados,id){
                                                            //update é um metodo do sequelize
    const listaDeAtualizacao = dataSource[this.model].update(novosDados,{where:{id : id}});
    //update retorna um array de numeros com a quantidade de colunas e linhas atualizadas, e aqui verifica se alguma foi atualizada
    if(listaDeAtualizacao[0] === 0){
      return false;
    }
    return true;
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
}

module.exports = Service;