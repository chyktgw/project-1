var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Reviews = require('./reviews');


var FoodSchema = new Schema({
  name: String,
  address: String,
  phoneNum: String,
  reviews: [Reviews.schema]
});

var Food = mongoose.model('Food', FoodSchema);

module.exports = Food;
