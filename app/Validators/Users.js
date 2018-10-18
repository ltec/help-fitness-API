'use strict'

class Users {
  get rules () {
    return {
      username: 'required',
      email: 'required',
      password: 'required'
    }
  }

  get messages() {
    return {
      'username.required': 'Username is required.',
      'email.required': 'Email required.',
      'password.required': 'Password is required.'
    }
  }
}

module.exports = Users
