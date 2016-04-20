$(document).ready(function() {
  console.log('sanity check!!');

//GET restaurant Info
$.get('/api/restaurant').success(function (restaurants) {
  restaurants.forEach(function(restaurant) {
    renderRestaurant(restaurant);
  });
});
});

function renderRestaurant(restaurant) {
  var source = $('#restaurant-template').html();
  restaurantTemplate = Handlebars.compile(source);
  var html = restaurantTemplate(restaurant);
  $('#restaurants').prepend(html);
  //console.log('render restaurant', restaurant);
}

//CREATE restaurants
$('#restaurantCreate').on('create', function(element) {
  element.preventDefault();
  var restData = $(this).serialize();
  console.log('restData', restData);
  $.post('/api/restaurant', restData, function(restaurant) {
    console.log('restaurant POST', restaurant);
    renderRestaurant(restaurant);  //render the server's response
  });
  $(this).trigger("reset");
});

$('#restaurants').on('#edit-info',editRestInfo);
//edit Rest. information edit-info button
  function editRestInfo(e) {
    console.log('clicked!');
    var $restaurantRow = $(this).closest('.restaurant');
    console.log($restaurantRow);
    var restaurantId = $restaurantRow.data('restaurant-id');
    console.log('edit rest', restaurantId);

    // edit rest. info (name, address, phone)
    var name = $restaurantRow.find('.name').text();
    $restaurantRow.find('.name').html('<input class="name" value="' + name + '"></input>');
    // edit address
    var address = $restaurantRow.find('.address').text();
    $restaurantRow.find('.address').html('<input class="address" value="' + address + '"></input>');
    // edit phone
    var phoneNum = $restaurantRow.find('.phoneNum').text();
    $restaurantRow.find('.phoneNum').html('<input class="phoneNum" value="' + phoneNum + '"></input>');
  }
