// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
var app = express();
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

app.get('/api/restaurant', controllers.restaurant.index);
app.get('/api/restaurant/:restaurantId', controllers.restaurant.show);
//app.delete('/api/restaurant/:restaurantId', controllers.restaurant.destroy);
//app.put('/api/restaurant/:restaurantId', controllers.restaurant.update);

app.get('/api/restaurant/:restaurantId/reviews', controllers.reviews.index);
app.post('/api/restaurant/:restaurantId/reviews', controllers.reviews.create);
app.delete('/api/restaurant/:restaurantId/reviews/:reviewId', controllers.reviews.destroy);



app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
