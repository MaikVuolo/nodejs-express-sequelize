/* eslint-disable linebreak-style */
const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const MatriculaController = require('../controllers/MatriculaController.js');

const routes = Router();

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

routes.get('/pessoas',(req,res)=> pessoaController.pegaTodos(req,res));
routes.get('/pessoas/todos',(req,res)=> pessoaController.pessoaPorEscopo(req,res));
routes.get('/pessoas/:id',(req,res) => pessoaController.buscaPorId(req,res));
routes.post('/pessoas',(req,res) => pessoaController.criaNovoRegistro(req,res));
routes.put('/pessoas/:id',(req,res) => pessoaController.atualizaRegistro(req,res));
routes.put('/pessoas/:estudante_id/cancela',(req,res) => pessoaController.cancelaRegistroEstudante(req,res));
routes.delete('/pessoas/:id',(req,res) => pessoaController.deleteRegister(req,res));
routes.patch('/pessoas/:id',(req,res) => pessoaController.restauraRegistro(req,res));
routes.get('/pessoas/:estudante_id/matricula',(req,res) => pessoaController.pegaMatricula(req,res));
routes.get('/pessoas/:estudante_id/matricula/todos',(req,res) => pessoaController.pegaTodasMatriculas(req,res));
routes.get('/pessoas/:estudante_id/matricula/contagem',(req,res) => matriculaController.pegaEContaMatriculas(req,res));
routes.get('/pessoas/matricula/limite',(req,res) => matriculaController.contaQtdMatriculaPorCurso(req,res));
routes.get('/pessoas/:estudante_id/matricula/:id',(req,res) => matriculaController.buscaPorParametro(req,res));
routes.post('/pessoas/:estudante_id/matricula',(req,res) => matriculaController.criaNovoRegistro(req,res));
routes.put('/pessoas/:estudante_id/matricula/:id',(req,res) => matriculaController.atualizaRegistro(req,res));
routes.delete('/pessoas/:estudante_id/matricula/:id',(req,res) => matriculaController.deleteRegister(req,res));
module.exports = routes;