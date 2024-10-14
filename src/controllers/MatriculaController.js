/* eslint-disable linebreak-style */
/* eslint-disable no-empty */
/* eslint-disable indent */

//database importando index da pasta models
const Controller = require ('./Controller.js');
const MatriculaService = require('../services/MatriculaService.js');
const Sequelize = require ('sequelize');

const matriculaService = new MatriculaService();

class MatriculaController extends Controller {
    constructor(){
        super(matriculaService);
    }

    async pegaEContaMatriculas(req,res){
        const { estudante_id } = req.params;
        try {
            const listaMatriculasEConta = await matriculaService.servicePegaEConta({
                where: {
                    estudante_id: Number(estudante_id),
                    status:'matriculado'
                },
                limit: 2
        });
            res.status(200).json(listaMatriculasEConta);
        } catch (erro) {
            res.status(500).json({erro: erro.message});
        }
    }
    async contaQtdMatriculaPorCurso(req,res){
        const limiteMatriculas = 1;
        try {
            const contagemMatriculasPorCurso = await matriculaService.servicePegaEConta(
                {
                where:{
                    status:'matriculado'
                },
                attributes: ['curso_id'],
                group: ['curso_id'],
                having: Sequelize.literal(`count(curso_id) >= ${limiteMatriculas} `)
        });
            res.status(200).json(contagemMatriculasPorCurso.count);
        } catch (erro) {
            res.status(500).json({erro: erro.message});
        }
    }
}

module.exports = MatriculaController;
