exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments("user_id");
      table.string("user_name").notNullable();
      table.string("user_password").notNullable();
    })
    .createTable("events", (table) => {
      table.increments("event_id");
      table.string("event_name").notNullable();
      table.string("event_description").notNullable();
      table.string("event_location").notNullable();
      table.time("event_time").notNullable();
      table
        .integer("creator_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("events")
    .dropTableIfExists("users");
};
