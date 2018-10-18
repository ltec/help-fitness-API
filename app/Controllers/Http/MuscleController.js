'use strict'
const Muscle = use('App/Models/Muscle')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with muscles
 */
class MuscleController {
  /**
   * Show a list of all muscles.
   * GET muscles
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const muscles = await Muscle.all()
    await muscles.load('exercises')

    return muscles
  }

  /**
   * Create/save a new muscle.
   * POST muscles
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.only([
      'id_goal',
      'title',
      'description',
      'path'
    ])

    const muscle = await Muscle.create({ ...data })

    return muscle;
  }

  /**
   * Display a single muscle.
   * GET muscles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const muscle = await Muscle.findOrFail(params.id)

    await muscle.load('exercises')

    return muscle
  }

  /**
   * Update muscle details.
   * PUT or PATCH muscles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const data = request.only([
      'goal_id',
      'title',
      'description',
      'path'
    ])

    const muscle = await Muscle.findOrFail(params.id)
    await muscle.merge({...data})
    await muscle.save()
    await muscle.load('exercises')

    return muscle
  }

  /**
   * Delete a muscle with id.
   * DELETE muscles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const muscle = await Muscle.findOrFail(params.id).delete()

    return 'operação efetuada com sucesso!'
  }
}

module.exports = MuscleController
