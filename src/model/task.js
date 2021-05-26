const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  title: String,
  money: Number,
  description: String,
  status: {
    type: Boolean,
    type: Boolean,
    default: false  
  }
});

module.exports = mongoose.model('tasks', TaskSchema);
