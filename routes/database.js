const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const Upload = require("../models/Upload");
const router = express.Router();

const DIR = "./files/";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, fileName);
  },
});

var upload = multer({
  storage: storage,
});

router.post("/", upload.array("files", 10), (req, res, next) => {
  const reqName = req.body.name;
  const reqFiles = [];
  const url = req.protocol + "://" + req.get("host");
  for (var i = 0; i < req.files.length; i++) {
    reqFiles.push(url + "/files/" + req.files[i].filename);
  }

  const upload = new Upload({
    _id: new mongoose.Types.ObjectId(),
    name: reqName,
    files: reqFiles,
  });
  upload
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Файлы загружены",
        Uploads: {
          _id: result._id,
          name: result.name,
          files: result.files,
        },
      });
    })
    .catch((err) => {
      console.log(err),
        res.status(500).json({
          error: err,
        });
    });
});

router.get("/", (req, res, next) => {
  Upload.find().then((data) => {
    res.status(200).json({
      message: "Файлы получены",
      uploads: data,
    });
  });
});

router.get("/database/:id", (req, res) => {
  Upload.findById(req.params.id, (err, collect) => {
    res.json(collect);
  });
});

module.exports = router;
