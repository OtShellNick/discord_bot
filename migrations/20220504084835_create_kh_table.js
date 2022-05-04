/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function (knex) {
  return knex.schema.createTable("kh", (table) => {
    table.increments("id");
    table.integer("question", 5).notNullable().unique();
    table.string("answer", 255).notNullable().defaultTo("");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function (knex) {
  return knex.schema.dropTable("kh");
};
