'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Muscle extends Model {
    goal() {
        return this.belongsTo('App/Models/Goal')
    }

    exercises() {
        return this.hasMany('App/Models/Exercise')
    }
}

module.exports = Muscle
