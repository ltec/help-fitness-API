'use strict'

class Sessions {
  get rules () {
    return {
      email: 'required',
      password: 'required'
    }
  }

  get messages() {
    return {
      'email.required': 'Email required.',
      'password.required': 'Password is required.'
    }
  }
}

module.exports = Sessions
