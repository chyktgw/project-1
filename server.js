// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
//new express app "app"
var app = express();
//require db models
var db = require('./models');
//body parser
var bodyParser = require('body-parser');
//add controllers
var controllers = require('./controllers');


// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

var controllers = require('./controllers');


/* ROUTES */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/* JSON API Endpoints */
//restaurant
app.get('/api', controllers.api.index);
//app.get('/api/food', controllers.food.index);
//app.get('/api/food/:_id', controllers.food.show);
//app.put('/api/food/:_id', controllers.food.update);

//reviews
//app.post('/api/reviews', controllers.reviews.create);
//app.delete('/api/reviews/:_id', controllers.reviews.destroy);


/* SERVER */

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
