const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let imgSchema = new Schema(
  {
    img: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    }
    
  },
  
);
module.exports = mongoose.model("Img", imgSchema);
