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
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
};

exports.upload = (req, res) => {
  let { url, name, location } = req.body;
  // first check if image has already been uploaded
  Img.findOne({ url: url })
    .then((img) => {
      if (img) {
        // if it has return an error
        return res.json({ errors: [{ img: "Image already exists" }] });
      } else {
        // otherwise see if the current location is beeing used
        Img.findOne({ location: location }).then((img) => {
          if (img) {
            // if location is being used update the item in that location
            Img.findOneAndUpdate({ location: location }, req.body)
              .then((dbModel) => {
                res.json(dbModel);
              })
              .catch((err) => {
                res.status(501).json({
                  errors: [{ error: "Something went wrong" }],
                });
              });
          } else {
            // Otherwise create a new item in that location
            const img = new Img({
              url: url,
              name: name,
              location: location
            });
            img
              .save()
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
        });
      }
    })
    .catch((err) => res.status(422).json(err));
};
