const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let imgSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    }
    
  },{
    timestamps: true,
    collection: 'imgs'
 }
  
);
module.exports = mongoose.model("Img", imgSchema);
