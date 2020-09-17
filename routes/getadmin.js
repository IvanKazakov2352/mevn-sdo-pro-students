const express = require("express");
const router = express.Router();
const getAdmin = require('../models/Admin')


router.get('/', (req, res) => {
    getAdmin.find((err, users) => {
        if (err) {
          throw err;
        } else {
          res.json(users);
        }
      });
})

module.exports = router;