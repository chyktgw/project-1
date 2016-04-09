var db = require('../models');
var bodyParser = require('body-parser');


function index(req, res) {
  db.Reviews.findById(req.params.restaurantId, function(err, foundRestaurant) {
    res.json(foundRestaurant.reviews);
  });
}

function create(req, res) {
  console.log("Params", req.params);
  console.log("Body", req.body);
  var newReview = new db.Review(req.body);
  newReview.save(function (err, savedReview){
    if (err) {
      return console.log("Error ", err);
    }
    res.json(savedReview);
  });
}

function destroy(req, res) {
  db.Restaurant.findById(req.params.restaurantId, function(err, foundRestaurant) {
    console.log(foundRestaurant);
    // we've got the album, now find the song within it
    var correctReview = foundRestaurant.reviews.id(req.params.reviewId);
    if (correctReview) {
      correctReview.remove();
      // resave the album now that the song is gone
      foundRestaurant.save(function(err, saved) {
        console.log('REMOVED ', correctReview.name, 'FROM ', saved.reviews);
        res.json(correctReview);
      });
    } else {
      res.send(404);
    }
  });
}

// export public methods here
module.exports = {
  index: index,
  create: create,
  destroy: destroy
};
