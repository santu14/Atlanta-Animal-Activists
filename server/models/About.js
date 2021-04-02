const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let aboutTextSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    
  },{
    timestamps: true,
    collection: 'aboutText'
 }
  
);
module.exports = mongoose.model("About", aboutTextSchema);
