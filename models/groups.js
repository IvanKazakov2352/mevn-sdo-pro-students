const mongoose = require("mongoose");
const mongooseDateFormat = require("mongoose-date-format");
const Schema = mongoose.Schema;

const group = new Schema(
  {
    namegroup: {
      type: String,
    },
    starttraining: {
      type: Date,
      default: Date.now,
    },
    endtraining: {
      type: Date,
      default: Date.now,
    },
    dateexamen: {
      type: Date,
      default: Date.now,
    },
    trainingplan: {
      type: String,
    },
    messagelistener: {
      type: String,
    },
    email: {
      type: String,
    },
    dostup: {
      type: Boolean,
    },
    alert: {
      type: Boolean,
    },
    message: {
      type: Boolean,
    },
    user: {
      type: Array,
    },
    course: {
      type: Array,
    },
  },
  {
    collection: "groups",
  }
);

group.plugin(mongooseDateFormat);
module.exports = mongoose.model("group", group);
