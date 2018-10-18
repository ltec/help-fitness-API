'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Goal extends Model {

    muscles() {
        return this.hasMany('App/Models/Muscle')
    }
}

module.exports = Goal
