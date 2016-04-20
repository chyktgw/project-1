var db = require('../models');
var bodyParser = require('body-parser');


function index(req, res) {
  db.Reviews.findById(req.params.restaurantId, function(err, foundRestaurant) {
      res.json(foundRestaurant.reviews);
    });
  }

function create(req, res) {
  db.Restaurant.findById(req.params.restaurantId, function(err, foundRestaurant) {
    console.log(req.body);
    var newReview = new db.Review(req.body);  // dangerous, in a real app we'd validate the incoming data
    foundRestaurant.reviews.push(newReview);
    foundRestaurant.save(function(err, savedRestaurant) {
      console.log('newReview created: ', newReview);
      res.json(newReview);  // responding with just the song, some APIs may respond with the parent object (Album in this case)
    });
  });
}


function destroy(req, res) {
  db.Restaurant.findById(req.params.restaurantId, function(err, foundRestaurant) {
    console.log(foundRestaurant);
    var correctReview = foundRestaurant.reviews.id(req.params.reviewId);
    if (correctReview) {
      correctReview.remove();
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
