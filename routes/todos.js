const express = require('express') // use express
const router = express.Router() // ???
const todosController = require('../controllers/todos') // sets up a variable (called on lines 5, 7, 9, 11 and 13) telling the program to go up a directory into a file controllers and into todos

router.get('/', todosController.getTodos) // for get requests to the root route follow todosController and then getTodos

router.post('/createTodo', todosController.createTodo) // for a post (create) request use route createTodo and follow todosController and then createTodo

router.put('/markComplete', todosController.markComplete)// for a put (update) request use route markComplete and follow todosController and then markComplete

router.put('/markIncomplete', todosController.markIncomplete)// for a put (update) request use route markInomplete and follow todosController and then markIncomplete

router.delete('/deleteTodo', todosController.deleteTodo) // for a delete request use route deleteTodo then follow todosController and markIncomplete

module.exports = router // export file and variable for use by other js files