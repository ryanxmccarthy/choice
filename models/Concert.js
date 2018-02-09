const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const concertSchema = new Schema({
  userID: {
    type: String,
    required: true
  },
  artist: { 
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

const Article = mongoose.model("Article", concertSchema);

module.exports = Article;

