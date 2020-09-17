const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sett = new Schema(
  {
    longnameorganization: {
      type: String,
    },
    factaddress: {
      type: String,
    },
    postindex1: {
      type: Number,
    },
    postindex2: {
      type: Number,
    },
    shortnomeorganization: {
      type: String,
    },
    town: {
      type: String,
    },
    license: {
      type: String,
    },
    uraddress: {
      type: String,
    },
    postaddress1: {
      type: String,
    },
    organlicense: {
      type: String,
    },
    postaddress2: {
      type: String,
    },
    email: {
      type: String,
    },
    inn: {
      type: Number,
    },
    ogrn: {
      type: Number,
    },
    kpp: {
      type: Number,
    },
    okpo: {
      type: Number,
    },
    fiodirector: {
      type: String,
    },
    fiozamdirector: {
      type: String,
    },
    phone1: {
      type: String,
    },
    phone2: {
      type: String,
    },
    whatsapp: {
      type: String,
    },
  },
  {
    collection: "settings",
  }
);

module.exports = mongoose.model("sett", sett);
