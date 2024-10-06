/* eslint-disable linebreak-style */
/* eslint-disable indent */
const express = require("express");

const rotaPessoas = require("./pessoaRoute.js");

module.exports = app =>{
    app.use(
        express.json(),
        rotaPessoas
    );
};