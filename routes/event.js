const express = require("express");
const router = express.Router();
const Event = require("../models/event");

router.get("/", (req, res) => {
  Event.find((err, events) => {
    if (err) {
      throw err;
    } else {
      res.json(events);
    }
  });
});

router.get("/:id", (req, res) => {
  Event.findById(req.params.id, (err, event) => {
    res.json(event);
  });
});

router.post("/", (req, res) => {
  const event = new Event(req.body);
  event
    .save()
    .then((event) => {
      res.status(200).json({ event: "Event Added" });
    })
    .catch((err) => {
      res.status(400).send({ event: "Error of added" });
    });
});

router.put("/:id", (req, res, next) => {
  Event.findById(req.params.id, (err, event) => {
    if (!event) {
      return next(new Error("Error update event"));
    } else {
      event.nameEvent = req.body.nameEvent;
      event.start = req.body.start;
      event.end = req.body.end;
      event.save()
        .then((course) => {
          res.json("Update completed");
        })
        .catch((err) => {
          res.status(400).send("No Update event");
        });
    }
  });
});

router.delete("/:id", (req, res, next) => {
  Event.findByIdAndRemove(req.params.id, (err, event) => {
    if (err) {
      res.json(err);
    } else {
      res.json("event deleted");
    }
  });
});

module.exports = router;
