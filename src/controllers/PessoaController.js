/* eslint-disable linebreak-style */
/* eslint-disable no-empty */
/* eslint-disable indent */

//database importando index da pasta models
const Controller = require ("./Controller.js");
const PessoaService = require("../services/PessoaService.js");

const pessoaService = new PessoaService();

class PessoaController extends Controller {
    constructor(){
        super(pessoaService);
    }
}

module.exports = PessoaController;
