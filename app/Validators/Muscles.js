'use strict'

class Muscles {
  get rules() {
    return {
      goal_id: 'required',
      description: 'required',
      title: 'required',
      path: 'required'
    }
  }

  get messages() {
    return {
      'goal_id.required': 'Goal_Id required.',
      'descritption.required': 'Descritption required.',
      'title.required': 'Title required.',
      'path.required': 'Path required.'
    }
  }
}

module.exports = Muscles
