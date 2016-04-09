var db = require("./models");
var restaurantList = require('./models/restaurant.js');

var restaurantList = [];
restaurantList({
  name: 'Restaurant A',
  address: '777 Geary St',
  phoneNum: '415-555-1234',
});
restaurantList({
  name: 'Restaurant B',
  address: '333 Bush St',
  phoneNum: '415-555-5555',
});
restaurantList({
  name: 'Restaurant C',
  address: '555 Market St',
  phoneNum: '415-555-0412',
});
restaurantList({
  name: 'Restaurant D',
  address: '333 Larkin St',
  phoneNum: '415-555-1111',
});
