const express = require('express');
const app = express();
const registroRoute = express.Router();

// DogSchema Model
let Registro = require('../models/RegistrosSchema');

// Addiciona um novo Registro
registroRoute.route('/create').post((req, res, next) => {
  Registro.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Resgata todos os Registros
registroRoute.route('/').get((req, res) => {
  Registro.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

module.exports = registroRoute;
