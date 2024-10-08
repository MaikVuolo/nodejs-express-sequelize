/* eslint-disable linebreak-style */
const { Router } = require('express');
const CategoriaController = require('../controllers/CategoriaController.js');

const routes = Router();

const categoriaController = new CategoriaController();

routes.get('/categorias',(req,res)=> categoriaController.pegaTodos(req,res));
routes.get('/categorias/:id',(req,res) => categoriaController.buscaPorId(req,res));
routes.post('/categorias',(req,res) => categoriaController.criaNovoRegistro(req,res));
routes.put('/categorias/:id',(req,res) => categoriaController.atualizaRegistro(req,res));
routes.delete('/categorias/:id',(req,res) => categoriaController.deleteRegister(req,res));
module.exports = routes;