const Todo = require('../models/Todo')

//methods talking to model listed above; 
module.exports = {
    getTodos: async(req, res) => {
        try {
            //finds all documents by using todo model (look at top to see where); using mongoose don't have to clarify using an array
            const todoItems = await Todo.find()
            const itemsLeft = await Todo.countDocuments({ completed: false })
                //render ejs to spit out html and respond with it
            res.render('todos.ejs', { todos: todoItems, left: itemsLeft })
        } catch (err) {
            console.log(err)
        }
    },
    createTodo: async(req, res) => {
        try {
            //req.body.todoitem is from form and reloads with res.redirect '/'
            await Todo.create({ todo: req.body.todoItem, completed: false })
            console.log('Todo has been added!')
            res.redirect('/todos')
        } catch (err) {
            console.log(err)
        }
    },
    markComplete: async(req, res) => {
        try {
            await Todo.findOneAndUpdate({ _id: req.body.todoIdFromJSFile }, {
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        } catch (err) {
            console.log(err)
        }
    },
    markIncomplete: async(req, res) => {
        try {
            await Todo.findOneAndUpdate({ _id: req.body.todoIdFromJSFile }, {
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        } catch (err) {
            console.log(err)
        }
    },
    deleteTodo: async(req, res) => {
        console.log(req.body.todoIdFromJSFile)
        try {
            await Todo.findOneAndDelete({ _id: req.body.todoIdFromJSFile })
            console.log('Deleted Todo')
            res.json('Deleted It')
        } catch (err) {
            console.log(err)
        }
    }
}