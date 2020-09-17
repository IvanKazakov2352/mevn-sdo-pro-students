const express = require("express");
const router = express.Router();
const Archive = require("../models/archiveGroups");

router.get("/", (req, res) => {
  Archive.find((err, archives) => {
    if (err) {
      throw err;
    } else {
      res.json(archives);
    }
  });
});

router.get("/:id", (req, res) => {
  Archive.findById(req.params.id, (err, archive) => {
    res.json(archive);
  });
});

router.post("/", (req, res) => {
  const group = new Archive(req.body);
  group.save()
    .then((group) => {
      res.status(200).json({ group: "group Added" });
    })
    .catch((err) => {
      res.status(400).send({ group: "Error of added" });
    });
});

router.delete("/:id", (req, res, next) => {
  Archive.findByIdAndRemove(req.params.id, (err, group) => {
    if (err) {
      res.json(err);
    } else {
      res.json("group deleted");
    }
  });
});

module.exports = router;
