const mongoose = require('mongoose')

const { Schema } = mongoose;

const commissionSchema = new Schema(
  {
    commissioner: {
      type: String,
      required: 'username cannot be blank'
    },
    comissionee: {
      type: String,
      required: 'email cannot be blank'
    },
    price: {
      type: String,
      required: 'password cannot be blank'
    },
    details: {
      type: Date
    }
  },
  {collection: 'commissions'}
);

module.exports = mongoose.model('commission', commissionSchema);