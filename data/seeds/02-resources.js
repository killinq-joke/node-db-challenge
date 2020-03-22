
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'computer', description: 'zeijfodahiheadihaz'},
        {id: 2, name: 'playstation', description: 'dieadzuaduhzaidazidhza'},
        {id: 3, name: 'big brain', description: 'dzajiizdjozad'}
      ]);
    });
};
