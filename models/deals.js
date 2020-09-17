const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deal = new Schema(
  {
    admin: {type: Object},
    course: {type: Object},
    group: {type: Object},
    namedeal: {type: String},
    status: {type: String},
    counterparty: {type: Object},
    commentary: {type: String},
    sumdok: {type: Number},
    sumplat: {type: Number},
    summar: {type: Number},
    commentaryzav: {type: String},
    fio: {type: String},
    position: {type: String},
    phone1: {type: String},
    phone2: {type: String},
    phone3: {type: String},
    email: {type: String},
    skype: {type: String},
    colorCard: {type: String},
    colorChip: {type: String}
  },
  {
    collection: "deals",
  }
);

module.exports = mongoose.model("deal", deal);
