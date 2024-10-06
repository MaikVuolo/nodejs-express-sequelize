/* eslint-disable linebreak-style */
const express = require('express');
//na importação de routes nao precisa passar o index.js no caminho, devido ao nome do arquivo ser index.js, é um padrao e ele puxa automaticamente
const routes = require('./routes');

const app = express();
routes(app);

module.exports = app;
