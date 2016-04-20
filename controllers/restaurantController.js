
var db = require('../models');
var bodyParser = require('body-parser');


// GET
function index(req, res) {
  db.Restaurant.find({}, function(err, Restaurants) {
    res.json(Restaurants);
  });
}

//CREATE
function create(req, res) {
  console.log('body', req.body);
  db.Restaurant.create(req.body, function(err, restaurant) {
    if (err) { console.log('error', err); }
    console.log(restaurant);
    res.json(restaurant);
  });
}

//SHOW
function show(req, res) {
  db.Restaurant.findById(req.params.restaurantId, function(err, restaurant) {
    if(err) { console.log('restaurantController.show error', err); }
    console.log('restaurant showing', restaurant);
    res.json(restaurant);
  });
}

//Delete
function destroy(req, res) {
  db.Restaurant.findOneAndRemove({ _id: req.params.restaurantId }, function(err, foundRestaurant){
    if(err) {console.log('destroy failed', err);}
    res.json(foundRestaurant);
  });
}


// export public methods here
module.exports = {
  index: index,
  show: show,
  create: create,
  delete: destroy
  //update: update
};
