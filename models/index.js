var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/food");

var Restaurant = require("./food");

module.exports.Food = Food;
module.exports.Reviews = require ("./reviews");
 
