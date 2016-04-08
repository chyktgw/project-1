var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ReviewsSchema = new Schema({
  name: String,
  date: String,
  rate: Num,
  price: String,
  text: String
});

var Reviews = mongoose.model('Reviews', ReviewsSchema);

module.exports = Reviews;
