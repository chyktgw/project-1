$(document).ready(function() {
  console.log('sanity check!');

  $.get('/api/restaurant').success(function (restaurants) {
    restaurants.forEach(function(restaurants) {
      renderRestaurant(restaurants);
    });
  });

    $('#restaurant-template').on('submit', function(e) {
      e.preventDefault();
      var formData = $(this).serialize();
      console.log('formData', formData);
      $.post('/api/restaurant', formData, function(restaurant) {
        console.log('restaurant after POST', restaurant);
        renderRestaurant(restaurant);
      });
      $(this).trigger("reset");
    });

  });
  function renderRestaurant(restaurant) {
    console.log('rendering restaurant', restaurant);
    var restaurantHtml = $('#restaurant-template').html();
    var restaurantTemplate = Handlebars.compile(restaurantHtml);
    var html = restaurantTemplate(restaurant);
    $('#restaurants').prepend(html);
  }
