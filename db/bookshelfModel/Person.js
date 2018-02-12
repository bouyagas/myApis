const bookshelf = require('../bookshelf');

const Person = bookshelf.Model.extend({
  tableName: 'persons',
});

module.exports = Person;
