const mongoose = require('mongoose')

const { Schema } = mongoose;

const cardSchema = new Schema(
  {
    username: {
      type: String,
      required: 'username cannot be blank'
    },
    price: {
      type: String,
      required: 'price cannot be empty'
    },
    details: {
      type: String
    }
  },
  {collection: 'cards'}
);

module.exports = mongoose.model('card', cardSchema);