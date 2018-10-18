'use strict'

class Exercises {
  get rules() {
    return {
      muscle_id: 'required',
      title: 'required',
      path: 'required'
    }
  }

  get messages() {
    return {
      'muscle_id.required': 'Muscle_Id required.',
      'title.required': 'Title required.',
      'path.required': 'Path required.'
    }
  }
}

module.exports = Exercises
