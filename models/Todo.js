const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  public: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
