const express = require("express");
const router = express.Router();
const Settings = require("../models/settings");

router.get("/", (req, res) => {
  Settings.find((err, settings) => {
    if (err) {
      throw err;
    } else {
      res.json(settings);
    }
  });
});

router.get("/:id", (req, res) => {
  Settings.findById(req.params.id, (err, sett) => {
    res.json(sett);
  });
});

router.post("/", (req, res) => {
  const sett = new Settings(req.body);
  sett.save()
    .then((sett) => {
      res.status(200).json({ sett: "Sett Added" });
    })
    .catch((err) => {
      res.status(400).send({ sett: "Error of added" });
    });
});

router.put("/:id", (req, res, next) => {
  Settings.findById(req.params.id, (err, sett) => {
    if (!sett) {
      return next(new Error("Error update task"));
    } else {
      sett.longnameorganization = req.body.longnameorganization,
      sett.factaddress = req.body.factaddress,
      sett.postindex1 = req.body.postindex1,
      sett.postindex2 = req.body.postindex2,
      sett.shortnomeorganization = req.body.shortnomeorganization,
      sett.town = req.body.town,
      sett.license = req.body.license,
      sett.uraddress = req.body.uraddress,
      sett.postaddress1 = req.body.postaddress1,
      sett.organlicense = req.body.organlicense,
      sett.postaddress2 = req.body.postaddress2,
      sett.email = req.body.email,
      sett.inn = req.body.inn,
      sett.ogrn = req.body.ogrn,
      sett.kpp = req.body.kpp,
      sett.okpo = req.body.okpo,
      sett.fiodirector = req.body.fiodirector,
      sett.fiozamdirector = req.body.fiozamdirector,
      sett.phone1 = req.body.phone1,
      sett.phone2 = req.body.phone2,
      sett.whatsapp = req.body.whatsapp,
      sett.save()
        .then((sett) => {
          res.json("Update completed");
        })
        .catch((err) => {
          res.status(400).send("No Update sett");
        });
    }
  });
});

router.delete("/:id", (req, res, next) => {
  Settings.findByIdAndRemove(req.params.id, (err, sett) => {
    if (err) {
      res.json(err);
    } else {
      res.json("Deal deleted");
    }
  });
});

module.exports = router;
