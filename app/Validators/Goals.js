'use strict'

class Goals {

  get rules() {
    return {
      title: 'required',
      path: 'required'
    }
  }

  get messages() {
    return {
      'title.required': 'Title required.',
      'path.required': 'Path required.'
    }
  }
}

module.exports = Goals
