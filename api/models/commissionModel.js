const mongoose = require('mongoose')

const { Schema } = mongoose;

const commissionSchema = new Schema(
  {
    username: {
      type: String,
      required: 'username cannot be blank'
    },
    email: {
      type: String,
      required: 'email cannot be blank'
    },
    password: {
      type: String,
      required: 'password cannot be blank'
    },
    joinDate: {
      type: Date
    },
    country: {
      type: String,
      required: 'country cannot be blank'
    },
    languages: {
      type: Array,
      "default" : []
    },
    artist: {
      type: Boolean
    }
  },
  {collection: 'commissions'}
);

module.exports = mongoose.model('commission', commissionSchema);