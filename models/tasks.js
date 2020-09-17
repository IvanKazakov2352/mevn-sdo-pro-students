const mongoose = require("mongoose");
const mongooseDateFormat = require("mongoose-date-format");
const Schema = mongoose.Schema;

const task = new Schema(
  {
    name: {
      type: String,
    },
    postan: {
      type: String,
    },
    description: {
      type: String,
    },
    otvets: {
      type: String,
    },
    status: {
      type: String,
      default: "Задача активна",
    },
    start: {
      type: Date,
      default: Date.now,
    },
    end: {
      type: Date,
      default: Date.now,
    },
    timestart: {
      type: String,
    },
    timeend: {
      type: String,
    },
  },
  {
    collection: "tasks",
  }
);
task.plugin(mongooseDateFormat);
module.exports = mongoose.model("task", task);
