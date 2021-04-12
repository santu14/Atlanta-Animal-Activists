const Events = require("../models/Events");




exports.getAllEvents = (req, res) => {
  Events.find({}).sort([["date", 1]])
    .then((data) => res.json(data))
    .catch((err) => res.status(422).json(err));
};

exports.uploadEvent = (req, res) => {
  let { name, date, description, location } = req.body;
  // first check if Event has already been uploaded
       
            const event = new Events({
              name: name,
              date: date,
              description: description,
              location: location
            });
            event
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
          
       
};
