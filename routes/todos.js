// file hears /todos and determines what controller to run
// CRUD!!
// go to todos controller
const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos')

// don't need /todos/getTodos -> they already know it's talking about todos
// specific method for each CRUD request
router.get('/', todosController.getTodos)

router.post('/createTodo', todosController.createTodo)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router