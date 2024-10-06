/* eslint-disable linebreak-style */
const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const routes = Router();

const pessoaController = new PessoaController();

routes.get('/pessoas',(req,res)=> pessoaController.pegaTodos(req,res));
routes.get('/pessoas/:id',(req,res) => pessoaController.buscaPorId(req,res));
routes.post('/pessoas',(req,res) => pessoaController.criaNovoRegistro(req,res));
routes.put('/pessoas/:id',(req,res) => pessoaController.atualizaRegistro(req,res));
routes.delete('/pessoas/:id',(req,res) => pessoaController.deleteRegister(req,res));
module.exports = routes;