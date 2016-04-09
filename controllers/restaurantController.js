var db = require('../models');
var bodyParser = require('body-parser');


// GET
function index(req, res) {
  db.Restaurant.find({}, function(err, Restaurants) {
    res.json(Restaurants);
  });
}

function show(req, res) {
  db.Restaurant.findById(req.params.restaurantId, function(err, foundRestaurant) {
    if(err) { console.log('restaurantController.show error', err); }
    console.log('restaurantController.show responding with', foundRestaurant);
    res.json(foundRestaurant);
  });
}


// export public methods here
module.exports = {
  index: index,
  show: show,
};
