const express = require("express");
const router = express.Router();
const Task = require("../models/tasks");

router.get("/", (req, res) => {
  Task.find((err, tasks) => {
    if (err) {
      throw err;
    } else {
      res.json(tasks);
    }
  });
});

router.get("/:id", (req, res) => {
  Task.findById(req.params.id, (err, task) => {
    res.json(task);
  });
});

router.post("/", (req, res) => {
  const task = new Task(req.body);
  task.save()
    .then((task) => {
      res.status(200).json({ task: "Task Added" });
    })
    .catch((err) => {
      res.status(400).send({ task: "Error of added" });
    });
});

router.put("/:id", (req, res, next) => {
  Task.findById(req.params.id, (err, task) => {
    if (!task) {
      return next(new Error("Error update task"));
    } else {
      task.name = req.body.name;
      task.postan = req.body.postan;
      task.description = req.body.description;
      task.otvets = req.body.otvets;
      task.status = req.body.status;
      task.start = req.body.start;
      task.end = req.body.end;
      task.timestart = req.body.timestart;
      task.timeend = req.body.timeend;
      task.save()
        .then((task) => {
          res.json("Update completed");
        })
        .catch((err) => {
          res.status(400).send("No Update task");
        });
    }
  });
});

router.delete("/:id", (req, res, next) => {
  Task.findByIdAndRemove(req.params.id, (err, task) => {
    if (err) {
      res.json(err);
    } else {
      res.json("Task deleted");
    }
  });
});

module.exports = router;
