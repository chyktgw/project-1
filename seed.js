var db = require("./models");
//var restaurantList = require('./models/restaurant.js');

var restaurantList = [];
restaurantList.push({
  name: 'Restaurant A',
  address: '777 Geary St',
  phoneNum: '415-555-1234',
});
restaurantList.push({
  name: 'Restaurant B',
  address: '333 Bush St',
  phoneNum: '415-555-5555',
});
restaurantList.push({
  name: 'Restaurant C',
  address: '555 Market St',
  phoneNum: '415-555-0412',
});
restaurantList.push({
  name: 'Restaurant D',
  address: '333 Larkin St',
  phoneNum: '415-555-1111',
});

var reviews = [];

reviews.push({ review: 'This place is nice.',
});
reviews.push({ review: 'Great food.',
});


restaurantList.forEach(function(restaurant) {
  restaurant.reviews = reviews;
});


db.Restaurant.remove({}, function(err, restaurants){

  db.Restaurant.create(restaurantList, function(err, restaurants){
    if (err) { return console.log('ERROR', err); }
    console.log("all restaurants:", restaurants);
    console.log("created", restaurants.length, "restaurants");
    process.exit();
  });

});
