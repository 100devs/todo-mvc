// requiring our todo model
const Todo = require('../models/Todo')

// object is made up of five methods of CRUD
// only thing that's talking to model
module.exports = {
    // get method
    getTodos: async (req,res)=>{
        try{
            // using the Todo model to find() - don't have to db.collection.. etc etc
            const todoItems = await Todo.find()
            const itemsLeft = await Todo.countDocuments({completed: false})
            // padding in all the Todos in our database
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft})
        }catch(err){
            console.log(err)
        }
    },
    // create method
    createTodo: async (req, res)=>{
        try{
            // create method is like insert one
            // create a document that has a todo property and a completed property
            // req.body.todoItem came from the form (it has input name="todoItem")
            await Todo.create({todo: req.body.todoItem, completed: false})
            console.log('Todo has been added!')
            // reload after it's complete -> make a get request
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    // update method
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    // update method
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    // delete method
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    