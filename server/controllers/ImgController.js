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
  let { url, name } = req.body;
  Img.findOne({ url: url })
    .then((img) => {
      if (img) {
        return res.json({ errors: [{ img: "Image already exists" }] });
      } else {
        const img = new Img({
          url: url,
          name: name
        });
        img.save()
        .then((response) => {
          res.status(200).json({
            success: true,
            result: response,
          });
        })
        .catch((err) => {
          res.status(500).json({
            errors: [{ error: err }],
          });
        });
      }
    })
    .catch((err) => res.status(422).json(err));
};
