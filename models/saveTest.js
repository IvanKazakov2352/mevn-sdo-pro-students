const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const test = new Schema(
  {
    nameTest: {
      type: String,
    },
    appraisal: {
      type: Number,
    },
    percent: {
      type: Number,
    },
    testQues: {
      type: Array
    },
    userID: {
      type: String
    }
  },
  {
    collection: "tests",
  }
);

module.exports = mongoose.model("test", test);
