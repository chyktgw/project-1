
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Reviews = require('./reviews');


var RestaurantSchema = new Schema({
  name: String,
  address: String,
  phoneNum: String,
  reviews: [Reviews.schema]
});

var Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
