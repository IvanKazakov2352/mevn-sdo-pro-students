const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const counterparty = new Schema(
  {
    name: { type: String },
    inn: { type: Number },
    manager: { type: String },
    namekr: { type: String },
    fio: { type: String },
    address: { type: String },
    position: { type: String },
    postcode: { type: Number },
    snils: { type: String },
    town: { type: String },
    group: { type: Array },
    legal: { type: String },
    postaddress: { type: String },
    vpasport: { type: String },
    factaddress: { type: String },
    ogrn: { type: Number },
    kpp: { type: Number },
    okpo: { type: Number },
    pasport: { type: String },
    okato: { type: Number },
    oktmo: { type: Number },
    okogu: { type: Number },
    okopf: { type: Number },
    phone: { type: String },
    faks: { type: String },
    email: { type: String },
    birthday: { type: String },
    education: { type: String },
    banks: { type: Array },
    deals: { type: Array },
    date: { 
      type: Date,
      default: Date.now
    },
    date1: { type: Date },
    date2: { type: Date, },
  },
  {
    collection: "counterparties",
  }
);

module.exports = mongoose.model("counterparty", counterparty);
