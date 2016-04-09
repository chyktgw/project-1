$(document).ready(function() {
  console.log('sanity check!');

  $.get('/api/restaurant').success(function (restaurants) {
    restaurants.forEach(function(restaurants) {
      renderRestaurant(restaurants);
    });
  });

    $('#restaurants').on('submit', function(e) {
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
