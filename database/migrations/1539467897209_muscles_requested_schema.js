'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MusclesRequestedSchema extends Schema {
  up () {
    this.create('muscles_requesteds', (table) => {
      table.increments()
      table
      .integer('exercise_id')
      .unsigned()
      .references('id')
      .inTable('exercises')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.string('title').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('muscles_requesteds')
  }
}

module.exports = MusclesRequestedSchema
