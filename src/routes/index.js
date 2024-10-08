/* eslint-disable linebreak-style */
/* eslint-disable indent */
const express = require('express');

const rotaPessoas = require('./pessoaRoute.js');
const rotaCursos = require('./cursoRoute.js');
const rotaCategoria = require('./categoriaRoute.js');

module.exports = app =>{
    app.use(
        express.json(),
        rotaPessoas,
        rotaCursos,
        rotaCategoria
    );
};