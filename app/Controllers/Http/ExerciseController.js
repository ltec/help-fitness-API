'use strict'
const Exercise = use('App/Models/Exercise')
const MusclesRequested = use('App/Models/MusclesRequested')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with exercises
 */
class ExerciseController {
  /**
   * Show a list of all exercises.
   * GET exercises
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const exercises = Exercise
      .query()
      .with('musclesRequested')
      .fetch()

    return exercises
  }


  /**
   * Create/save a new exercise.
   * POST exercises
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.only([
      'id_muscle',
      'title',
      'path',
      'perfomance'
    ])

    const exercise = await Exercise.create({ ...data })

    let musclesRequested = request.only(['musclesRequested']).musclesRequested
    await musclesRequested.forEach(x => {
      exercise.musclesRequested().create({ title: x })
    })

    await exercise.load('musclesRequested')

    return exercise;
  }

  /**
   * Display a single exercise.
   * GET exercises/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const exercise = await Exercise.findOrFail(params.id)

    await exercise.load('musclesRequested')

    return exercise
  }

  /**
   * Update exercise details.
   * PUT or PATCH exercises/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const data = request.only([
      'id_muscle',
      'title',
      'path',
      'perfomance'
    ])

    const exercise = await Exercise.merge({ ...data })

    await exercise.save();

    let musclesRequested = request.only(['musclesRequested']).musclesRequested

    await musclesRequested.forEach(x => ({ title: x }))

    await exercise.musclesRequested().saveMany(musclesRequested)

    await exercise.load('musclesRequested')

    return exercise
  }

  /**
   * Delete a exercise with id.
   * DELETE exercises/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const exercise = await Exercise.findOrFail(params.id)

    await exercise.musclesRequested().delete()

    await exercise.delete()

    return 'operação efetuada com sucesso!'
  }
}

module.exports = ExerciseController
