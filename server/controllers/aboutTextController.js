const About = require("../models/About");



exports.getAboutText = (req, res) => {
  let { location } = req.body
  console.log(location)
  About.findOne({ location: location})
    .then((data) => res.json(data))
    .catch((err) => res.status(422).json(err));
};


exports.uploadAboutText = (req, res) => {
  let { text, location } = req.body;
  // first check if image has already been uploaded
        About.findOne({ location: location }).then((About) => {
          if (About) {
            // if location is being used update the item in that location
            About.findOneAndUpdate({ location: location }, req.body)
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
            const about = new About({
              text: text,
              location: location
            });
            about
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
        }).catch((err) => res.status(422).json(err));
};
