const express = require('express');
const personModel = require('../models/personModel');

const getJSONrep = (req, res, next) => {
  return res.json(res.persons || []);
  next();
};

const personRoute = express.Router();
personRoute.route('/').get(personModel.getAllPerson, getJSONrep);
module.exports = personRoute;
