/* eslint-disable linebreak-style */
/* eslint-disable no-empty */
/* eslint-disable indent */

//database importando index da pasta models
const Controller = require ('./Controller.js');
const CursoService = require('../services/CursoService.js');
const { Op } = require('sequelize');

const cursoService = new CursoService();

class CursoController extends Controller {
    constructor(){
        super(cursoService);
    }
    async pegaCursosComData(req,res){
        const { data_inicio , data_final} = req.query;
        const where = {};

        data_inicio || data_final ? where.data_inicio = {} : null;
        data_inicio ? where.data_inicio[Op.gte] = data_inicio : null;
        data_final ? where.data_inicio[Op.lte] = data_final : null;
        try {
            const listaCursos = await cursoService.pegaTodosOsModelos(where);
            return res.status(200).json(listaCursos);
        } catch (erro) {
            return res.status(500).json({erro: erro.message});
        }


    }
}

module.exports = CursoController;
