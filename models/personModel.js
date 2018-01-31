const Person = require('../db/bookshelfModel/Person');

const personModel = {};

personModel.getAllPerson = (req, res, next) => {
  return Person.forge()
    .orderBy('id', 'DESC')
    .fetchAll()
    .then(persons => {
      res.persons = persons;
      next();
    })
    .catch(error => next(error));
};

module.exports = personModel;
