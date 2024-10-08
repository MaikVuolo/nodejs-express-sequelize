/* eslint-disable linebreak-style */
/* eslint-disable no-empty */
/* eslint-disable indent */

//database importando index da pasta models
const Controller = require ('./Controller.js');
const PessoaService = require('../services/PessoaService.js');

const pessoaService = new PessoaService();

class PessoaController extends Controller {
    constructor(){
        super(pessoaService);
    }
    async pegaMatricula(req,res){
        const { estudanteId } = req.params;
        try {
            const listaMatriculas = await pessoaService.buscaMatriculaPorId(Number(estudanteId));
            return res.status(200).json(listaMatriculas); 
        } catch (erro) {
            //erro
        }
    }
}

module.exports = PessoaController;
