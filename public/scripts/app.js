$(document).ready(function() {
  console.log('sanity check!!');

//GET restaurant Info
$.get('/api/restaurant').success(function (restaurants) {
  restaurants.forEach(function(restaurant) {
    renderRestaurant(restaurant);
  });
});


//CREATE restaurants
$( "#create" ).on("click", function(element) {
console.log('this works');
  $( "#restaurantCreate" ).submit();
  alert( "Handler for .subimt() called." );
  element.preventDefault();
  var restData = $('#restaurantCreate').serialize();
  console.log('restData', restData);

  $.ajax({
    method: "POST",
    url: "/api/restaurant/",
    data: restData,
    success: createSuccess,
    error: createError
  });
function createError(error){
  console.log('CREATE ERROR');
}
function createSuccess(data){
  $.ajax({
    method: "GET",
    url: "/api/restaraunt/:restaurantId",
    success: sanitySuccess,
    error: sanityError
  });
}
});
function sanitySuccess(success) {
  console.log(success , "this workkksss");
  var restaurantSuccess = success;
  restaurantSuccess.forEach( function(oneRestaurant) {
    renderRestaurant(oneRestaurant);
    });

  function renderRestaurant(oneRestaurant){
  var source = $('#restaurant-template').html();
  restaurantTemplate = Handlebars.compile(source);
  var html = restaurantTemplate(restaurant);
  $('#restaurants').prepend(html);
}
}

// //EDIT Rest. INFO
// $('#restaurants').on('#edit-info',editRestInfo);
// //edit Rest. information edit-info button
//   function editRestInfo(e) {
//     console.log('clicked!');
//     var $restaurantRow = $(this).closest('.restaurant');
//     console.log($restaurantRow);
//     var restaurantId = $restaurantRow.data('restaurant-id');
//     console.log('edit rest', restaurantId);
//
//     // edit rest. info (name, address, phone)
//     var name = $restaurantRow.find('.name').text();
//     $restaurantRow.find('.name').html('<input class="name" value="' + name + '"></input>');
//     // edit address
//     var address = $restaurantRow.find('.address').text();
//     $restaurantRow.find('.address').html('<input class="address" value="' + address + '"></input>');
//     // edit phone
//     var phoneNum = $restaurantRow.find('.phoneNum').text();
//     $restaurantRow.find('.phoneNum').html('<input class="phoneNum" value="' + phoneNum + '"></input>');
//   }



//DELETE RESTAURANT
  $('#restaurants').on('click', '.delete', deleteRestaurant);

  function deleteRestaurant(e) {
    var restaurantId = $(this).parents('.restaurant').data('restaurant-id');
    console.log('someone wants to delete restaurant id=' + restaurantId );
    $.ajax({
      url: '/api/restaurant/' + restaurantId,
      method: 'DELETE',
      success: deleteSuccess
    });
  }

//sucess callback
  function deleteSuccess(data) {
    var deleteRestaurantId = data._id;
    console.log('remove restaurant', deleteRestaurantId);
    //$('div[data-restaurant-id=' + deleteRestaurantId + ']').remove();
    $('[data-restaurant-id=' + deleteRestaurantId + ' ]').remove();
  }

});
