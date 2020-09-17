const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uploadSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  },
  files: {
    type: Array
  },
}, {
  collection: 'uploads'
})

module.exports = mongoose.model('Upload', uploadSchema)