// using mongoose to make a connection to mongo db
const mongoose = require('mongoose')

// this const exports an async funtion which we call in our server JS -- connect DB
const connectDB = async () => {
  try { //familiar db string that is housed in the env
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


//environment variables are stored in the config folder 