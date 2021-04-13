const express = require('express')
const app = express()
const connectDB = require('./config/database')
    //routes named as const; look at request and see which controller to use
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')

require('dotenv').config({ path: './config/.env' })

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//routes to use (and then links to it's own file in routes folder)
app.use('/', homeRoutes)
app.use('/todos', todoRoutes)

app.listen(process.env.PORT, () => {
    console.log('Server is running, you better catch it!')
})