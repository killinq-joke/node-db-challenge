
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'make america great', description: 'blablablablablablablablablablablablablablabla', completed: false},
        {id: 2, name: 'make france great', description: 'dsadkoblablablablablablablablablablablablablablabla', completed: false},
        {id: 3, name: 'bruhhhhhh', description: 'dsadkozdadzadzdzqdadzadzadzazadsqfdsgtresyhtxtftjufkuglkohm', completed: false}
      ]);
    });
};
