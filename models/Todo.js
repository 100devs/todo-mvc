//mongoose to talk to the db
const mongoose = require('mongoose')

//this sets a structure for our data as it goes in and out of our DB 
const TodoSchema = new mongoose.Schema({
  // sets todo as a string and makes it required
  todo: {
    type: String,
    required: true,
  },
  //sets completed as a booleana nd makes it required 
  completed: {
    type: Boolean,
    required: true,
  }
})

//exporting the model 
module.exports = mongoose.model('Todo', TodoSchema)
