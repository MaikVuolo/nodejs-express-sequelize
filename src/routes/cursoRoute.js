/* eslint-disable linebreak-style */
const { Router } = require('express');
const CursoController = require('../controllers/CursoController.js');

const routes = Router();

const cursoController = new CursoController();

routes.get('/cursos',(req,res)=> cursoController.pegaCursosComData(req,res));
routes.get('/cursos/:id',(req,res) => cursoController.buscaPorId(req,res));
routes.post('/cursos',(req,res) => cursoController.criaNovoRegistro(req,res));
routes.put('/cursos/:id',(req,res) => cursoController.atualizaRegistro(req,res));
routes.delete('/cursos/:id',(req,res) => cursoController.deleteRegister(req,res));
module.exports = routes;