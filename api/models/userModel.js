const mongoose = require('mongoose')

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: 'username cannot be blank'
    },
    password: {
      type: String,
      required: 'password cannot be empty'
    },
    email: {
      type: String,
      required: 'email cannot be blank'
    }
  },
  {collection: 'users'}
);

module.exports = mongoose.model('user', userSchema);