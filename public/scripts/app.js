$(document).ready(function() {
  console.log('sanity check!!');

//AJAX call to get hard coded data
$.get('/api/restaurant/').success(function (restaurants) {
  restaurants.forEach(function(restaurant) {
    renderRestaurant(restaurant);
  });
});

//Listens to create new restaurant
$( "#restaurantCreate-form" ).on('submit', function(element) {
console.log('on submit clcked');
  element.preventDefault();
  var formData = $(this).serialize();
  console.log(formData);

  $.post('/api/restaurant', formData, function(restaurant) {
    console.log('POST', restaurant);
    renderRestaurant(restaurant);
  });
  $(this).trigger("reset");
});



////////////ON CLICKS////////////
// $('#restaurants').on('click', '.writeReview', function(evt) {
//   console.log("writeReview click");
//   //{{id}} from app.js
//   var currentRestaurantId = $(this).closest('.restaurant').data('restaurant-id');
//   //the write Review modal for specific rest.ID
//   $('#writeReview').data('restaurant-id', currentRestaurantId);
//   $('#writeReview').modal();  // this will display the modal
// });
// //add review
//  $('#addReview').on('click', addReview);

//DELETE
$('#restaurants').on('click', '.delete', deleteRestaurant);


});

//Render Functions. Long and complicated... Read Comments!!
//all rest.list prepend
  function renderRestaurant(restaurant){
  var source = $('#restaurant-template').html();
  restaurantTemplate = Handlebars.compile(source);
  var html = restaurantTemplate(restaurant);
  $('#restaurants').prepend(html);
  console.log('renderRestaurant');
}

// function addReview(e) {
//   e.preventDefault();
//   //def. var
//   var $modal = $('#writeReview');
//   var $nameField = $modal.find('#name');
//   var $dateField = $modal.find('#date');
//   var $priceField = $modal.find('#price');
//   var $textField = $modal.find('#review');
//
//   //get data to post into right field
//   var dataToPost = {
//     name: $nameField.val(),
//     date: $dateField.val(),
//     price: $priceField.val(),
//     text: $textField.val()
//   };
//   console.log('data: ' , dataToPost);
//   //ID to ajax
//   var restaurantId = $modal.data('restaurantId');
//
//   //Post to Server and Back
//   var reviewUrl = '/api/review/'+ restaurantId + '/reviews';
//   console.log(reviewUrl);
//
//   $.post(reviewUrl, dataToPost)
//      .success(function(restaurant) {
//        console.log('review', restaurant);
//
//        //to clear the form
//        $nameField.val('');
//        $dateField.val('');
//        $priceField.val('');
//        $textField.val('');
//
//        //close modal
//        $modal.modal('hide');
//
//        //removes previous rest., render with new review and rest.
//        $('[data-restaurant-id='+ restaurantId + ']').remove();
//
//        renderRestaurant(restaraunt);//
//
//   }).error(function(err) {
//      console.log("error:", error);
//   });
//
// }


//DELETE RESTAURANT
function deleteRestaurant(event) {
  var restaurantId = $(this).parents('.restaurant').data('restaurant-id');
  console.log("delete rest.Id: ", restaurantId);

  $.ajax({
    method: 'DELETE',
    url: '/api/restaurant/' + restaurantId,
    success:  deleteSuccess
  });


  //call success function
  function deleteSuccess(data) {
    var deletedRestaurantId = data._id;
    console.log("removing restaurant:", deletedRestaurantId);
    $('div[data-restaurant-id=' + restaurantId + ']').remove();
    }
  }

// function createError(error){
//   console.log('CREATE ERROR');
//
// function createSuccess(restData){
//   $.ajax({
//     method: "GET",
//     url: "/api/restaraunt/:id",
//     success: sanitySuccess,
//     error: sanityError
//   });
// }
// });

// function sanitySuccess(success) {
//   console.log(success , "this workkksss");
//   var restaurantSuccess = success;
//   restaurantSuccess.forEach( function(restaurant) {
//     renderRestaurant(restaurant);
//     });
// }


// function sanityError(error) {
//   console.log(error);
//
// }
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
