// because we already are on the todos route -- we dont have to specify todos/ and todos/createTodo -- by linking the actual routes file in the server.js -- saves us time and code 

const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos')

// once we are on the main route we use the todos controller -- go to the todocontroller and run gettodos -- an async request -> this is the getTodos method stored in the controller 
router.get('/', todosController.getTodos)

//createTodo post fromt the EJS got sent through the router 
router.post('/createTodo', todosController.createTodo)

//go to controller and use the markcomplete method
router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router