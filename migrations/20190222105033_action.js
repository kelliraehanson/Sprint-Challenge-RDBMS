
exports.up = function(knex, Promise) {
    return knex.schema.createTable('action', table =>{
        table.increments('action_id');
        
        table.string('action_description');

        table.string('notes');

        table.boolean('action_finished')

        table.integer('project_id')
        .unsigned();

        table.foreign('project_id')
        .references('id')
        .inTable('project');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('action');
};