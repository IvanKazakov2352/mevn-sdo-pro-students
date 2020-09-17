const express = require("express");
const router = express.Router();
const Group = require("../models/groups");

router.get("/", (req, res) => {
  Group.find((err, groups) => {
    if (err) {
      throw err;
    } else {
      res.json(groups);
    }
  });
});

router.get("/:id", (req, res) => {
  Group.findById(req.params.id, (err, group) => {
    res.json(group);
  });
});

router.post("/", (req, res) => {
  const group = new Group(req.body);
  group
    .save()
    .then((group) => {
      res.status(200).json({ group: "Group Added" });
    })
    .catch((err) => {
      res.status(400).send({ group: "Error of added" });
    });
});

router.put("/:id", (req, res, next) => {
  Group.findById(req.params.id, (err, group) => {
    if (!group) {
      return next(new Error("Error update group"));
    } else {
      group.namegroup = req.body.namegroup;
      group.starttraining = req.body.starttraining;
      group.endtraining = req.body.endtraining;
      group.dateexamen = req.body.dateexamen;
      group.start = req.body.start;
      group.end = req.body.end;
      group.trainingplan = req.body.trainingplan;
      group.messagelistener = req.body.messagelistener;
      group.email = req.body.email;
      group.dostup = req.body.dostup;
      group.alert = req.body.alert;
      group.message = req.body.message;
      group.user = req.body.user;
      group.course = req.body.course;
      group
        .save()
        .then((group) => {
          res.json("Update completed");
        })
        .catch((err) => {
          res.status(400).send("No Update Group");
        });
    }
  });
});

router.delete("/:id", (req, res, next) => {
  Group.findByIdAndRemove(req.params.id, (err, group) => {
    if (err) {
      res.json(err);
    } else {
      res.json("Group deleted");
    }
  });
});

module.exports = router;
