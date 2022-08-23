const Todo = require('../models/Todo') // setting up variable Todo by telling it to go up a level then into models and into Todo

module.exports = { // as set up by todo routes line 15
    getTodos: async (req,res)=>{  // a promis syntax
        try{
            const todoItems = await Todo.find() // variable connecting to Todo model then finding
            const itemsLeft = await Todo.countDocuments({completed: false}) //variable connecting to Todo model then counting documents with completed status of false
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft}) // respond with a render of 'todos.ejs pass todos info at variable written line 6 and left info as variable written line 7
        }catch(err){ //if there is an error
            console.log(err) // tell me what error in the console
        }
    },
    createTodo: async (req, res)=>{ // a promise syntax
        try{
            await Todo.create({todo: req.body.todoItem, completed: false}) // go to Todo and create with todo feild holding todoItem from body of DOM with a completed feild of false   
            console.log('Todo has been added!') // tell me in the console that it is done
            res.redirect('/todos') //refresh the page with to route /todos
        }catch(err){ // if there is an error
            console.log(err) // tell me what error int he console
        }
    },
    markComplete: async (req, res)=>{ // a promise syntax
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{ //go to Todo and find and update the document that has an id number that matches todoIdFromJSFile
                completed: true // update completed to true
            })
            console.log('Marked Complete') //tell me in the console
            res.json('Marked Complete') // send the client JSON that tells them it's complete
        }catch(err){ // if there is an error
            console.log(err) // tell me what error in the console
        }
    },
    markIncomplete: async (req, res)=>{ // a promis syntax
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{ // go to Todo and find and update the document that has an id number that matches todoIdFromJSFile (sent with the fetch request(
                completed: false // update completed to false
            })
            console.log('Marked Incomplete') // tell me it's incomplete
            res.json('Marked Incomplete') // send the client JSON that tell's them it's incomplete  
        }catch(err){ //if there is an error
            console.log(err) // tell me what error in the console
        }
    },
    deleteTodo: async (req, res)=>{ // a promise syntax
        console.log(req.body.todoIdFromJSFile) // a console log (probably to check that we are gtting the id
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile}) // go to Todo and find and delete the document that has an id number that matches todoIdFromJSFile (sent with the fetch request)
            console.log('Deleted Todo') // tell me it's deleted
            res.json('Deleted It') // Send the clinet JSON that tells them it's deleted
        }catch(err){ //if there is an error
            console.log(err) // tell me what error int eh console
        }
    }
}    