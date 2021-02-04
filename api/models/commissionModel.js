const mongoose = require('mongoose')

const { Schema } = mongoose;

const commissionSchema = new Schema(
  {
    username: {
      type: String,
      required: 'username cannot be blank'
    },
    artist: {
      type: String,
      required: 'artist cannot be blank'
    },
    price: {
      type: String,
      required: 'password cannot be blank'
    },
    details: {
      type: String
    },
    datePosted: {
      type: Date
    }
  },
  {collection: 'commissions'}
);

module.exports = mongoose.model('commission', commissionSchema);