var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/restaurant");

var Restaurant = require("./restaurant");

module.exports.Restaurant = Restaurant;
module.exports.Reviews = require ("./reviews");
 
