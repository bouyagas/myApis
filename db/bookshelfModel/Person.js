const bookshelf = require('../bookshelf');

const Person = bookshelf.Model.extend({
  tableName: 'person',
});

module.exports = Person;
