// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
var Restaurant = require('./models/restaurant.js');
var Reveiws = require('./models/reviews.js');
var app = express();
var db = require('./models');
var bodyParser = require('body-parser');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

var controllers = require('./controllers');


/**********
 * ROUTES *
 **********/

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api', controllers.api.index);

//Restaurants
app.get('/api/restaurant', controllers.restaurant.index);
app.post('/api/restaurant/', controllers.restaurant.create);
app.get('/api/restaurant/:id', controllers.restaurant.show);
app.delete('/api/restaurant/:id', controllers.restaurant.delete);
//app.put('/api/restaurant/:restaurantId', controllers.restaurant.update);

//Reviews
app.get('/api/restaurant/:id/reviews', controllers.reviews.index);
app.post('/api/restaurant/:id/reviews', controllers.reviews.create);
app.delete('/api/restaurant/:id/reviews/:id', controllers.reviews.destroy);



app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
