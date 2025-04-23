const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, enum: ['pending', 'in progress', 'completed'], default: 'pending' },
  assignTo:String,
  date: { type: Date, default: Date.now },
  category:String
});

module.exports = mongoose.model('Task', taskSchema);
