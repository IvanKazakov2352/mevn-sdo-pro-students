const express = require("express");
const router = express.Router();
const Test = require("../models/saveTest");

router.get("/", (req, res) => {
  Test.find((err, tests) => {
    if (err) {
      throw err;
    } else {
      res.json(tests);
    }
  });
});

router.get("/:id", (req, res) => {
  Test.findById(req.params.id, (err, test) => {
    res.json(test);
  });
});

router.post("/", async (req, res) => {
  const test = new Test(req.body);
  await test.save()
  res.status(200)
});

router.delete("/:id", (req, res, next) => {
  Test.findByIdAndRemove(req.params.id, (err, test) => {
    if (err) {
      res.json(err);
    } else {
      res.json("Test deleted");
    }
  });
});

module.exports = router;
