const express = require('express')
const app = express()
// no more mongo client - we have mongoose - leads to database file
const connectDB = require('./config/database')
// separate place for routes and this connects to it
// routes look at the request and they figure out which controller should be handling that request 
// controller is the middle person that talkes to database, hands off info to views for rendering
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')

require('dotenv').config({path: './config/.env'})

// use this line to connect to database - calling connectDB() from database.js
connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// heard a request on '/' -> go to homeRoutes
app.use('/', homeRoutes)
// heard a request on '/todos' -> go to todoRoutes
app.use('/todos', todoRoutes)
 
//port is in env file
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    