const express = require("express");
const router = express.Router();
const Deal = require("../models/deals");

router.get("/", (req, res) => {
  Deal.find((err, deals) => {
    if (err) {
      throw err;
    } else {
      res.json(deals);
    }
  });
});

router.get("/:id", (req, res) => {
  Deal.findById(req.params.id, (err, deal) => {
    res.json(deal);
  });
});

router.post("/", (req, res) => {
  const deal = new Deal(req.body);
  deal
    .save()
    .then((deal) => {
      res.status(200).json({ deal: "Deal Added" });
    })
    .catch((err) => {
      res.status(400).send({ deal: "Error of added" });
    });
});

router.put("/:id", (req, res, next) => {
  Deal.findById(req.params.id, (err, deal) => {
    if (!deal) {
      return next(new Error("Error update task"));
    } else {
      deal.admin = req.body.admin,
      deal.course = req.body.course,
      deal.group = req.body.group,
      deal.namedeal = req.body.namedeal,
      deal.status = req.body.status,
      deal.counterparty = req.body.counterparty,
      deal.commentary = req.body.commentary,
      deal.sumdok = req.body.sumdok,
      deal.sumplat = req.body.sumplat,
      deal.summar = req.body.summar,
      deal.commentaryzav = req.body.commentaryzav,
      deal.fio = req.body.fio,
      deal.position = req.body.position,
      deal.phone1 = req.body.phone1,
      deal.phone2 = req.body.phone2,
      deal.phone3 = req.body.phone3,
      deal.email = req.body.email,
      deal.skype = req.body.skype,
      deal.colorCard = req.body.colorCard,
      deal.colorChip = req.body.colorChip,
      deal
        .save()
        .then((deal) => {
          res.json("Update completed");
        })
        .catch((err) => {
          res.status(400).send("No Update task");
        });
    }
  });
});

router.delete("/:id", (req, res, next) => {
  Deal.findByIdAndRemove(req.params.id, (err, deal) => {
    if (err) {
      res.json(err);
    } else {
      res.json("Deal deleted");
    }
  });
});

module.exports = router;
