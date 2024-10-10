'use strict';
const isValidCpf = require ('../../utils/validaCpf.js');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    static associate(models) {
      Pessoa.hasMany(models.Curso,{
        foreignKey:'docente_id'
      } );
      Pessoa.hasMany(models.Matricula,{
        foreignKey:'estudante_id',
        scope:{status: 'matriculado'},
        as: 'aulasMatriculadas'
      } );
    }
  }
  Pessoa.init({
    nome: { 
      type: DataTypes.STRING,
      validate: {
        len:{
          //propriedade do sequelize para validação de caracteres
          args: [3,30],
          msg: 'Número de caracteres inválido. Min 3 - Max 30'
        }
      }
    },
    email: {
      type:DataTypes.STRING,
      validate:{
        isEmail:{
          args: true,
          msg: 'Formato de email inválido'
        }
      }
    },
    cpf: {
      type: DataTypes.STRING,
      validate:{
        CpfEValido: (cpf)=>{
          if(!isValidCpf(cpf)) throw new Error('CPF inválido');
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoa',
    tablename:'pessoas',
    paranoid: true,
    defaultScope:{
      where:{
        ativo: true
      }
    },
    scopes:{
      todosPorScopo:{
        where: {}
      }
    }
  });
  return Pessoa;
};