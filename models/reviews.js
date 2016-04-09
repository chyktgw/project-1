var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ReviewsSchema = new Schema({
  name: String,
  date: String,
  price: String,
  text: String
});

var Reviews = mongoose.model('Reviews', ReviewsSchema);

module.exports = Reviews;
