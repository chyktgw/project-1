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

//Restaurants
app.get('/api/restaurant', controllers.restaurant.index);
//POST
app.post('/api/restaurant/', controllers.restaurant.create);
//POST for write review for restaurant (create)
app.get('/api/restaurant/:id', controllers.restaurant.create);
//DELETE restaurant
app.delete('/api/restaurant/:id', controllers.restaurant.delete);
//PUT restaurant ID when update
//app.put('/api/restaurant/:id', controllers.restaurant.update);


app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
