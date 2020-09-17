const mongoose = require("mongoose");
const mongooseDateFormat = require("mongoose-date-format");
const Schema = mongoose.Schema;

const event = new Schema(
  {
    nameEvent: {
      type: String,
    },
    start: {
      type: Date,
    },
    end: {
      type: Date,
    },
  },
  {
    collection: "events",
  }
);

event.plugin(mongooseDateFormat);
module.exports = mongoose.model("event", event);
