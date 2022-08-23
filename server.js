const express = require('express')
const app = express()
const connectDB = require('./config/database') // where to look for database connection string
const homeRoutes = require('./routes/home') //sets up a variable (called line 16) indicating to go up a level, into routes directory and into home file.
const todoRoutes = require('./routes/todos') //sets up a variable (called line 17) indicating to go up a level, into routes directory and into todos file

require('dotenv').config({path: './config/.env'}) // this is how node knows how to use dotenv for environment variables

connectDB() // a call for the function that connects the server to the database (as defined in const db on line 3)

app.set('view engine', 'ejs') // dealing with how to use EJS
app.use(express.static('public')) // telling express to access static files in public folder
app.use(express.urlencoded({ extended: true })) // replaces body parser how to pull data out of body (using url)
app.use(express.json())// replaces body parser how to pull data out of body using JSON objects

app.use('/', homeRoutes) // dealing with routers how to deal with root route in homeroutes references variable line 4
app.use('/todos', todoRoutes) //dealing with routers how to deal with /todos route references variable line 5
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    // where to listen and set up port, using enviornmental variable. written in a way that also allows for other port once in production