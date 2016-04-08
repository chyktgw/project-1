var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Restaurant = require('./restaurant');

var RestaurantSchema = new Schema({
  restName: String,
  address: String,
  phoneNum: String,
  genres: [ String ],
  reviews: [Review.schema]
});

var Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
