'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MuscleSchema extends Schema {
  up () {
    this.create('muscles', (table) => {
      table.increments()
      table
      .integer('goal_id')
      .unsigned()
      .references('id')
      .inTable('goals')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.string('title').notNullable()
      table.string('description')
      table.string('path')
      table.timestamps()
    })
  }

  down () {
    this.drop('muscles')
  }
}

module.exports = MuscleSchema
