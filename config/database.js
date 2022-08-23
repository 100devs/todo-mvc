const mongoose = require('mongoose') // require mongoose 

const connectDB = async () => { //promise syntax
  try {
    const conn = await mongoose.connect(process.env.DB_STRING, { // conn using mongoose connect using a variable found in .env (the place of secrets) called DB_STRING
      useNewUrlParser: true, // a parser to help with URL passed to JavaScript
      useUnifiedTopology: true, // something about how MongoDB connects
      useFindAndModify: false, // do not allow find and modify for it is depreciated
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`) // tell us that mongodb is connected
  } catch (err) { // iff there is an error
    console.error(err) // tell me what the error is
    process.exit(1) // and stop this process 
  }
}

module.exports = connectDB // be able to export this for use by other files using connectDB as a variable name
