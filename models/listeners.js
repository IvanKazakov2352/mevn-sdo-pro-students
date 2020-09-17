const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listener = new Schema(
  {
    fiolistener: {
      type: String,
    },
    datebirth: {
      type: Date,
    },
    password: {
      type: String,
    },
    login: {
      type: String,
    },
    dateregister: {
      type: Date,
      default: Date.now(),
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    group: {
      type: String,
    },
    counterparty: {
      type: String,
    },
    education: {
      type: String,
    },
    position: {
      type: String,
    },
    snils: {
      type: String,
    },
    birth: {
      type: String,
    },
    register: {
      type: String,
    },
    pasport: {
      type: String,
    },
    vpasport: {
      type: String,
    },
    datereceiving: {
      type: Date,
    },
  },
  {
    collection: "listeners",
  }
);

module.exports = mongoose.model("listener", listener);
