const Todo = require('../models/Todo')
const Public = require('../models/public')
module.exports = {
    getTodos: async (req, res) => {
        try {
            const todoItems = await Todo.find()
            const itemsLeft = await Todo.countDocuments({ completed: false })
            res.render('todos.ejs', { todos: todoItems, left: itemsLeft })
        } catch (err) {
            console.log(err)
        }
    },
    createTodo: async (req, res) => {
        try {
            await Todo.create({ todo: req.body.todoItem, completed: false })
            console.log('Todo has been added!')
            res.redirect('/todos')
        } catch (err) {
            console.log(err)
        }
    },
    markComplete: async (req, res) => {
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
    markIncomplete: async (req, res) => {
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
    deleteTodo: async (req, res) => {
        console.log(req.body.todoIdFromJSFile)
        try {
            await Todo.findOneAndDelete({ _id: req.body.todoIdFromJSFile })
            console.log('Deleted Todo')
            res.json('Deleted It')
        } catch (err) {
            console.log(err)
        }
    },
    makePublicTodo: async (req, res) => {
        console.log(req.body)
        try {
            await Todo.findByIdAndUpdate(req.body.todoIdFromJSFile,
                { public: true })
            res.json('marked public')
        }
        catch (err) {
            console.log(err)
        }
    },
    getPublicTodos: async (req, res) => {
        const todoItems = await Todo.find()
        res.render('public.ejs', { todos: todoItems })
    }

}
