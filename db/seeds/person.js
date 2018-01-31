exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('person')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('person').insert([
        { id: 1, name: 'Gassama', gender: 'Male', age: 23 },
        { id: 2, name: 'Alima', gender: 'Female', age: 43 },
        { id: 3, name: 'Mohamed', gender: 'Male', age: 34 },
        { id: 4, name: 'Fatou', gender: 'Female', age: 32 },
        { id: 5, name: 'Lamine', gender: 'Male', age: 45 },
        { id: 6, name: 'Ami', gender: 'Female', age: 94 },
        { id: 7, name: 'Oumou', gender: 'Male', age: 84 },
        { id: 8, name: 'Fanta', gender: 'Female', age: 38 },
        { id: 9, name: 'Alpha', gender: 'Male', age: 49 },
        { id: 10, name: 'Mariam', gender: 'Female', age: 89 },
      ]);
    });
};
