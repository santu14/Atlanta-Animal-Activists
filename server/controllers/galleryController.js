const Gallery = require("../models/Gallery");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


//  ------------------------------------------ Sign Up ------------------------------------------------------
exports.upload = (req, res) => {
  
    Gallery.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => {
        res.json(dbModel)
      })
      .catch((err) => {
        res.status(500).json({
          errors: [{ error: "Something went wrong" }],
        });
      });
  };
  exports.find = (req, res) => {
  
    Gallery.find(req.query)
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  };




