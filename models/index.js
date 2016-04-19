var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/food");

var Food = require("./food");

module.exports.Food = Food;
module.exports.Reviews = require ("./reviews");
