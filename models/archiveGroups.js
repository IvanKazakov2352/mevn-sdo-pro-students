const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const archive = new Schema(
  {
    group: {
      type: Object
    },
  },
  {
    collection: "archives",
  }
);

module.exports = mongoose.model("archive", archive);
