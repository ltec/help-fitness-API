'use strict'

const Goal = use('App/Models/Goal')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with goals
 */
class GoalController {
  /**
   * Show a list of all goals.
   * GET goals
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const goals = Goal
      .query()
      .with('muscles')
      .fetch()

    return goals
  }


  /**
   * Create/save a new goal.
   * POST goals
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.only([
      'title',
      'path'
    ])

    const goal = await Goal.create({ ...data })

    return goal;
  }

  /**
   * Display a single goal.
   * GET goals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const goal = await Goal.findOrFail(params.id)

    await goal.load('muscles')

    return goal
  }

  /**
   * Update goal details.
   * PUT or PATCH goals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {

    const data = request.only([
      'title',
      'path'
    ])

    const goal = await Goal.findOrFail(params.id)

    goal.merge({ ...data })

    await goal.save()

    return goal
  }

  /**
   * Delete a goal with id.
   * DELETE goals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const goal = await Goal
      .findOrFail(params.id)
      .delete()

    return 'operação efetuada com sucesso!'
  }
}

module.exports = GoalController
