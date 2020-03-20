
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'do great', notes: "notes, and notes", completed: false, project_id: 2},
        {id: 2, description: 'make baguettes', completed: true, project_id: 2},
        {id: 3, description: 'install a sound board', notes: "hey zak wassup", completed: false, project_id: 3}
      ]);
    });
};
