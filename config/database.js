const mongoose = require('mongoose')

//db string is in env file that needs to be created; mongoose used to connect to mongoDB
//connectDB is exporting function and being called in server.js as 'connectDB()'
const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.DB_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDB