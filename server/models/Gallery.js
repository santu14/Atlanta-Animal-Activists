const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let gallerySchema = new Schema(
  {
    img1: {
      type: String,
      required: true,
    },
    img2: {
      type: String,
      required: true,
    },
    img3: {
      type: String,
      required: true,
    },
    img4: {
      type: String,
      required: true,
    },
    img5: {
      type: String,
      required: true,
    },
    img6: {
      type: String,
      required: true,
    },
    img7: {
      type: String,
      required: true,
    },
    img8: {
      type: String,
      required: true,
    },
    img9: {
      type: String,
      required: true,
    },
  },
  
);
module.exports = mongoose.model("Gallery", gallerySchema);
