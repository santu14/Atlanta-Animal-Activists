const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let eventSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    description: {
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
module.exports = mongoose.model("Events", eventSchema);
