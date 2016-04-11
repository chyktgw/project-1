var db = require('../models');
var bodyParser = require('body-parser');


// GET
function index(req, res) {
  db.Restaurant.find({}, function(err, Restaurants) {
    res.json(Restaurants);
  });
}

//SHOW
function show(req, res) {
  db.Restaurant.findById(req.params.restaurantId, function(err, foundRestaurant) {
    if(err) { console.log('restaurantController.show error', err); }
    console.log('restaurantController.show responding with', foundRestaurant);
    res.json(foundRestaurant);
  });
}

//UPDATE
function update(req, res) {
  console.log('update', req.body);
  var newData = req.body;
  db.Restaurant.findByIdAndUpdate(req.params.restaurantId, newData, function(err, foundRestaurant) {
    if(err) { console.log('restaurantController.update error', err); }
    foundRestaurant.name = req.body.name;
    foundRestaurant.address= req.body.address;
    foundRestaurant.phoneNum = req.body.phoneNum;
    foundRestaurant.save(function(err, savedRestaurant) {
      if(err) { console.log('update failed'); }
      res.json(savedRestaurant);
    });
  });

}

// export public methods here
module.exports = {
  index: index,
  show: show,
  update: update
};
