const Img = require("../models/Img");

exports.update = (req, res) => {
  Img.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((dbModel) => {
      res.json(dbModel);
    })
    .catch((err) => {
      res.status(500).json({
        errors: [{ error: "Something went wrong" }],
      });
    });
};

exports.find = (req, res) => {
  Img.find({})
    .then((dbModel) => res.json(dbModel.data))
    .catch((err) => res.status(422).json(err));
};

exports.upload = (req, res) => {
  let { img } = req.body;
  Img.findOne({ img: img })
    .then((img) => {
      if (img) {
        return res.json({ errors: [{ img: "Image already exists" }] });
      } else {
        const img = new Img({
          img: img,
        });
      }
    })
    .catch((err) => res.status(422).json(err));
};
