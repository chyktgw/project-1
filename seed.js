var db = require("./models");
//var restaurantList = require('./models/restaurant.js');

//HARD CORD DATA
var foodList = [{
  name: 'Hot Sauce and Panko',
  address: '1468 Hyde St',
  phoneNum: '415-555-1908',
  reviews: []
},
{
  name: 'farm:table',
  address: '754 Post St',
  phoneNum: '415-555-5555',
  reviews: []
},
{
  name: 'The Soapbox Cafe',
  address: '1800 Hyde St',
  phoneNum: '415-829-7139',
  reviews: []
},
{
  name: 'Swan Oyster',
  address: '1517 Polk St',
  phoneNum: '415-673-1101',
  reviews: []
},
{
  name: 'El Mission',
  address: '1754 University St',
  phoneNum: '415-555-3780',
  reviews: []
}
];

var reviewsList = [{
  name: "Rachel",
  date: "3/31",
  price: "$20",
  text: "Good, but a little overpriced."
  },
  {
  name: "TOm",
  date: "4/1",
  price: "$10",
  text: "Cheap and great!"
    }
  ];

db.Reviews.create(reviewsList, function(err, reviews){
    if(err){console.log(err); return;}
    console.log('created reviews');
    console.log('created', reviews.length, "reviews");

 db.Reviews.remove({}, function(err, instructors){
   console.log('reveiws removed');

 });
});
