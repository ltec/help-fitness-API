'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExercisesSchema extends Schema {
  up () {
    this.create('exercises', (table) => {
      table.increments()
      table
      .integer('muscle_id')
      .unsigned()
      .references('id')
      .inTable('muscles')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.string('title').notNullable()
      table.string('path')
      table.string('perfomance',999)
      table.timestamps()
    })
  }

  down () {
    this.drop('exercises')
  }
}

module.exports = ExercisesSchema
