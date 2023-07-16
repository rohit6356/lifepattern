const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  religionBeliever: {
    type: String,
    required: true
  }
})

const User = mongoose.model('USER', userSchema);
module.exports = User;