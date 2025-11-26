const mongoose = require("mongoose");

// TODO: Define your Task schema here
const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  pomodoroCount: {
    type: Number,
    default: 0
  },
}, { timestamps: true });


const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
