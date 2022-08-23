const mongoose = require('mongoose') // require mongoose which allows for the schema

const TodoSchema = new mongoose.Schema({ // make a constructor called TodoSchema it is a new mongoose schema
  todo: { // first feild (key) called todo
    type: String, // its type is a string
    required: true, // and it is required
  },
  completed: { // second feild (key)) called completed
    type: Boolean, // type (of 8 possible) is boolean (truthy/falsy)
    required: true, // and it is required
  }
})

module.exports = mongoose.model('Todo', TodoSchema) // export this as Todo and TodoSchema for use by other files
