
exports.up = function(knex, Promise) {
    return knex.schema.createTable('project', table =>{
        table.increments('id')
        .unique();

        table.string('name')
        .notNullable();

        table.string('description')

        table.boolean('completed')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('project');
};
