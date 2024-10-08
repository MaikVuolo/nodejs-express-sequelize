/* eslint-disable linebreak-style */
/* eslint-disable no-empty */
/* eslint-disable indent */

//database importando index da pasta models
const Controller = require ('./Controller.js');
const CategoriaService = require('../services/CategoriaService.js');

const categoriaService = new CategoriaService();

class CategoriaController extends Controller {
    constructor(){
        super(categoriaService);
    }
}

module.exports = CategoriaController;
