const Person = require('../db/bookshelfModel/Person');

const personModel = {};

personModel.getAllPerson = (req, res, next) => {
  return Person.forge()
    .orderBy('id', 'DESC')
    .fetchAll()
    .then(response => {
      res.persons = response;
      next();
    })
    .catch(error => next(error));
};

personModel.getSinglePerson = (req, res, next) => {
  return Person.where('id', req.params.id)
    .fetchAll()
    .then(response => {
      res.persons = response;
      next();
    })
    .catch(error => next(error));
};

personModel.createNewPerson = (req, res, next) => {
  return new Person({
    name: req.body.name,
    gender: req.body.gender,
    age: req.body.age,
  })
    .save()
    .then(next())
    .catch(error => next(error));
};

personModel.updatePerson = (req, res, next) => {
  return Person.where('id', req.params.id)
    .fetch()
    .then(person => {
      person
        .save({
          name: req.body.name,
          gender: req.body.gender,
          age: req.body.age,
        })
        .then(next());
    })
    .catch(error => next(error));
};

personModel.deletePerson = (req, res, next) => {
  return Person.where('id', req.params.id)
    .destroy()
    .then(next())
    .catch(error => next(error));
};

module.exports = personModel;
