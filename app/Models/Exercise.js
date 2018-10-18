'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Exercise extends Model {

    muscle() {
        return this.belongsTo('App/Models/Muscle')
    }

    musclesRequested() {
        return this.hasMany('App/Models/MusclesRequested')
    }
}

module.exports = Exercise
