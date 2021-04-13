// this is the model -- and the controller is the only thing that talks to it 
const Todo = require('../models/Todo')

//spits out an object with 5 methods
module.exports = {
    //method gets run by the todo routes -- we use the getTodos method from the todoController
    getTodos: async (req,res)=>{
        try{
            //the consts are accessing the database -- the todo variable is requiring the todo model 
            //mongoose already returns our array of objects without having to use toArray
            const todoItems = await Todo.find()
            //we count how many object we have left to (completed=false)
            const itemsLeft = await Todo.countDocuments({completed: false})
            //response with the EJS HTML
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft})
        }catch(err){
            console.log(err)
        }
    },
    //method that creates a new todo using the Todo model 
    createTodo: async (req, res)=>{
        try{
            //create is analogous to createOne --> todoItem is present in the ejs forms under Name 
            await Todo.create({todo: req.body.todoItem, completed: false})
            console.log('Todo has been added!')
            //make a get request and reload to the main page -- todo
            //why is this not jsut / --> because we are not on the main route -- so we make sure to not send them back to the main page but rather keep them on the todo page 
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },

    // method that runs in response to the controller 
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                //set complete to true which activated the css stylings 
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
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

    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            // hey model find one and delete to dinf the todoId from the main js file -- utilizing the unique id given to the dang thing from the ejs 
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    