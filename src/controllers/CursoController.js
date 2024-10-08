/* eslint-disable linebreak-style */
/* eslint-disable no-empty */
/* eslint-disable indent */

//database importando index da pasta models
const Controller = require ('./Controller.js');
const CursoService = require('../services/CursoService.js');

const cursoService = new CursoService();

class CursoController extends Controller {
    constructor(){
        super(cursoService);
    }
}

module.exports = CursoController;
