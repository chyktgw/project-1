
var db = require("./models");
//var restaurantList = require('./models/restaurant.js');

var restaurantList = [];
restaurantList.push({
  name: 'Hot Sauce and Panko',
  address: '1468 Hyde St',
  phoneNum: '415-555-1908',
});
restaurantList.push({
  name: 'farm:table',
  address: '754 Post St',
  phoneNum: '415-555-5555',
});
restaurantList.push({
  name: 'The Soapbox Cafe',
  address: '1800 Hyde St',
  phoneNum: '415-829-7139',
});
restaurantList.push({
  name: 'Swan Oyster',
  address: '1517 Polk St',
  phoneNum: '415-673-1101',
});

db.Restaurant.create(restaurantList, function (err, restaurant){
  if (err) {return console.log('error', err); }
  console.log('all restaurants', restaurant);
  process.exit();
});


var reviews = [];

reviews.push({ review: 'This place is nice.',
});
reviews.push({ review: 'Great food.',
});


restaurantList.forEach(function(restaurant) {
  restaurant.reviews = reviews;
});
