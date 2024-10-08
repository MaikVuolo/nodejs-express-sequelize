/* eslint-disable linebreak-style */
const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const MatriculaController = require('../controllers/MatriculaController.js');

const routes = Router();

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

routes.get('/pessoas',(req,res)=> pessoaController.pegaTodos(req,res));
routes.get('/pessoas/:id',(req,res) => pessoaController.buscaPorId(req,res));
routes.post('/pessoas',(req,res) => pessoaController.criaNovoRegistro(req,res));
routes.put('/pessoas/:id',(req,res) => pessoaController.atualizaRegistro(req,res));
routes.delete('/pessoas/:id',(req,res) => pessoaController.deleteRegister(req,res));
routes.get('/pessoas/:estudanteId/matricula',(req,res) => pessoaController.pegaMatricula(req,res));
routes.post('/pessoas/:estudanteId/matricula',(req,res) => matriculaController.criaNovoRegistro(req,res));
module.exports = routes;