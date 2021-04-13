const express = require('express')
const app = express()
// we require our config folder which houses our database file
const connectDB = require('./config/database')

// our routes look at the request (see the url) and figure out which controller should handle that request 
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')

require('dotenv').config({path: './config/.env'})

//uses the code in our database js -- this allows us to potentially use a different database
connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//beginning of our router -- whenever theres a request on the main route the routes home js file will handle it 
app.use('/', homeRoutes)

//beginnnig of the router whenever we click the make a todo list link from the main page -- made by clicking the link in the homepage
// when it hears a todo rout we use the todoRoutes file -- definted in the const above 
app.use('/todos', todoRoutes)


// PORT is not defined in this file -- that is in the environment files -- this is an example of ABSTRACTION 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    

// if you try to run this code, will it run? no. because you dont have access to the env