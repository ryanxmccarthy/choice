const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  userID: {
    type: String,
    required: true
  },
  name: { 
    type: String, 
    required: true 
  },
  location: { 
    type: String,
    required: true 
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  url: {
    type: String,
    required: true
  },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;

