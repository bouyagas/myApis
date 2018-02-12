const express = require('express');
const personModel = require('../models/personModel');

const getJSONrep = (req, res, next) => {
  return res.json(res.persons || []);
  next();
};

const postJSONrep = (req, res, next) => {
  return res.json({ message: 'A person has been successfully created' });
  next();
};

const updateJSONrep = (req, res, next) => {
  return res.json({ message: 'A person has been successfully update' });
  next();
};

const deleteJSONrep = (req, res, next) => {
  return res.json({ message: 'A person has been successfully deleted' });
  next();
};

const personRoute = express.Router();

personRoute
  .route('/')
  .get(personModel.getAllPerson, getJSONrep)
  .post(personModel.createNewPerson, postJSONrep);

personRoute
  .route('/:id')
  .get(personModel.getSinglePerson, getJSONrep)
  .put(personModel.updatePerson, updateJSONrep)
  .delete(personModel.deletePerson, deleteJSONrep);

module.exports = personRoute;
