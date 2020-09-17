const express = require("express");
const router = express.Router();
const Listener = require("../models/listeners");

router.get("/", (req, res) => {
  Listener.find((err, listeners) => {
    if (err) {
      throw err;
    } else {
      res.json(listeners);
    }
  });
});

router.get("/:id", (req, res) => {
  Listener.findById(req.params.id, (err, listener) => {
    res.json(listener);
  });
});

router.post("/", (req, res) => {
  const listener = new Listener(req.body);
  listener.save()
    .then((listener) => {
      res.status(200).json({ listener: "listener Added" });
    })
    .catch((err) => {
      res.status(400).send({ listener: "Error of added" });
    });
});

router.put("/:id", (req, res, next) => {
  Listener.findById(req.params.id, (err, listener) => {
    if (!listener) {
      return next(new Error("Error update listener"));
    } else {
      listener.fiolistener = req.body.fiolistener;
      listener.datebirth = req.body.datebirth;
      listener.phone = req.body.phone;
      listener.email = req.body.email;
      listener.login = req.body.login;
      listener.password = req.body.password;
      listener.group = req.body.group;
      listener.counterpatry = req.body.counterpatry;
      listener.education = req.body.education;
      listener.position = req.body.position;
      listener.snils = req.body.snils,
      listener.birth = req.body.birth,
      listener.register = req.body.register,
      listener.pasport = req.body.pasport,
      listener.vpasport = req.body.vpasport,
      listener.datereceiving = req.body.datereceiving;
      listener.save()
        .then((listener) => {
          res.json("Update completed");
        })
        .catch((err) => {
          res.status(400).send("No Update listener");
        });
    }
  });
});

router.delete("/:id", (req, res, next) => {
  Listener.findByIdAndRemove(req.params.id, (err, listener) => {
    if (err) {
      res.json(err);
    } else {
      res.json("Listener deleted");
    }
  });
});

module.exports = router;
