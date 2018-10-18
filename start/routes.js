'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create')
  .middleware('default')
  .validator('Users')

Route.post('/sessions', 'SessionController.create')
  .middleware('default')
  .validator('Sessions')
  
Route.resource('goals', 'GoalController')
  .apiOnly()
  .middleware(['default', 'auth'])
  .validator(new Map([
    [['goals.store'], ['Goals']],
    [['goals.update'], ['Goals']]
  ]))

Route.resource('muscles', 'MuscleController')
  .apiOnly()
  .middleware(['default', 'auth'])
  .validator(new Map([
    [['muscles.store'], ['Muscles']],
    [['muscles.update'], ['Muscles']]
  ]))

Route.resource('exercises', 'ExerciseController')
  .apiOnly()
  .middleware(['default', 'auth'])
  .validator(new Map([
    [['exercises.store'], ['Exercises']],
    [['exercises.update'], ['Exercises']]
  ]))
