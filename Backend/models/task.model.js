const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {type:String},
  description: {type:String},
  status: { type: String, enum: ['pending', 'in progress','failed', 'completed'], default: 'pending' },
  assignTo:String,
  date: { type: Date, default: Date.now },
  category: { type:String },
});

module.exports = mongoose.model('Task', taskSchema);
