
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

}

// //UPDATE
// function update(req, res) {
//   console.log('updating with data', req.body);
//   db.Restaurant.findById(req.params.restaurantId, function(err, Restaurant) {
//     if(err) { console.log('restaurantController.update error', err); }
//     Restaurant.name = req.body.name;
//     Restaurant.address = req.body.address;
//     Restaurant.phoneNum = req.body.phoneNum;
//     Restaurant.save(function(err, savedRestaurant){
//      if(err) { console.log ('saving failed'); }
//      res.json(savedRestaurant);
//    });
//  });
//
// }

// export public methods here
module.exports = {
  index: index,
  show: show,
  create: create
  //update: update
};
