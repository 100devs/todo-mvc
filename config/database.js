// using mongoose to connect to our mongo database
const mongoose = require('mongoose')

const connectDB = async () => {
  // exporting an async function
  try {
    // db_string variable is in my env file
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
