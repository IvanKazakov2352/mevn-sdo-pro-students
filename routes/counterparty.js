const express = require("express");
const router = express.Router();
const Counterparty = require("../models/counterparties");

router.get("/", (req, res) => {
  Counterparty.find((err, counterparties) => {
    if (err) {
      throw err;
    } else {
      res.json(counterparties);
    }
  });
});

router.get("/:id", (req, res) => {
  Counterparty.findById(req.params.id, (err, counterparty) => {
    res.json(counterparty);
  });
});

router.post("/", (req, res) => {
  const counterparty = new Counterparty(req.body);
  counterparty
    .save()
    .then((counterparty) => {
      res.status(200).json({ counterparty: "Counterparty Added" });
    })
    .catch((err) => {
      res.status(400).send({ counterparty: "Error of added" });
    });
});

router.put("/:id", (req, res, next) => {
  Counterparty.findById(req.params.id, (err, counterparty) => {
    if (!counterparty) {
      return next(new Error("Error update counterparty"));
    } else {
      counterparty.name = req.body.name;
      counterparty.inn = req.body.inn;
      counterparty.manager = req.body.manager;
      counterparty.namekr = req.body.namekr;
      counterparty.legal = req.body.legal;
      counterparty.fio = req.body.fio;
      counterparty.address = req.body.address;
      counterparty.position = req.body.position;
      counterparty.postcode = req.body.postcode;
      counterparty.snils = req.body.snils;
      counterparty.town = req.body.town;
      counterparty.group = req.body.group;
      counterparty.postaddress = req.body.postaddress;
      counterparty.vpasport = req.body.vpasport;
      counterparty.factaddress = req.body.factaddress;
      counterparty.ogrn = req.body.ogrn;
      counterparty.kpp = req.body.kpp;
      counterparty.okpo = req.body.okpo;
      counterparty.pasport = req.body.pasport;
      counterparty.okato = req.body.okato;
      counterparty.oktmo = req.body.oktmo;
      counterparty.okogu = req.body.okogu;
      counterparty.okopf = req.body.okopf;
      counterparty.phone = req.body.phone;
      counterparty.faks = req.body.faks;
      counterparty.email = req.body.email;
      counterparty.listener = req.body.listeners;
      counterparty.birthday = req.body.birthday;
      counterparty.education = req.body.education;
      counterparty.banks = req.body.banks;
      counterparty.deals = req.body.deals;
      counterparty.date = req.body.date;
      counterparty.date1 = req.body.date1;
      counterparty.date2 = req.body.date2;
      counterparty
        .save()
        .then((counterparty) => {
          res.json("Update completed");
        })
        .catch((err) => {
          res.status(400).send("No Update counterparty");
        });
    }
  });
});

router.delete("/:id", (req, res, next) => {
  Counterparty.findByIdAndRemove(req.params.id, (err, counterparty) => {
    if (err) {
      res.json(err);
    } else {
      res.json("Counterparty deleted");
    }
  });
});

module.exports = router;
