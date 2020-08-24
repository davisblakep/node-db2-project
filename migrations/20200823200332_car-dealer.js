exports.up = async function (knex) {
  await knex.schema.createTable("car-dealer", (table) => {
    table.increments("id");
    table.text("make").notNull();
    table.text("model").notNull();
    table.text("VIN").notNull();
    table.integer("mileage").notNull();
    table.text("status").defaultTo("Unknown");
    table.text("transmission").defaultTo("Unknown");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("car-dealer");
};
