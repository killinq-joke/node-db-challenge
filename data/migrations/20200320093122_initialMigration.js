exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl.string("description");
      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
    })
    .createTable("resources", tbl => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl.string("description");
    })
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.string("description");
      tbl.string("notes");
      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);

      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects");
    })
    .createTable("project-resource", tbl => {
      tbl.increments();

      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects");

      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project-resource")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
