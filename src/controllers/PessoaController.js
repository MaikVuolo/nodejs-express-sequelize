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
        const { estudante_id } = req.params;
        try {
            const listaMatriculas = await pessoaService.buscaMatriculaPorId(Number(estudante_id));
            return res.status(200).json(listaMatriculas); 
        } catch (erro) {
            return res.status(500).json({erro: erro.message});
        }
    }
    async pegaTodasMatriculas(req,res){
        const { estudante_id } = req.params;
        try {
            const listaTodasAsMatriculas = await pessoaService.buscaTodasMatriculasPorId(Number(estudante_id));
            return res.status(200).json(listaTodasAsMatriculas); 
        } catch (erro) {
            return res.status(500).json({erro: erro.message});
        }
    }
    async pessoaPorEscopo(req,res){
        try {
            const listaPessoas = await pessoaService.buscaPorEscopo();
            return res.status(200).json(listaPessoas);
            
        } catch (erro) {
            return res.status(500).json({erro: erro.message});
        }
    }
    async cancelaRegistroEstudante(req,res){
        const { estudante_id } = req.params;
        try {
            await pessoaService.cancelaRegistroMatriculaEstudante(Number(estudante_id));
            return res.status(200).json({mensagem: `Matriculas referentes ao estudante de id ${estudante_id} foram canceladas.`}); 
        } catch (erro) {
            return res.status(500).json({erro: erro.message});
        }
    }
}

module.exports = PessoaController;
