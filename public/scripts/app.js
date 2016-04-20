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



// //CREATE reviews
//  $('#restaurants').on('click', '.write-review', handleWriteReview);
//  function handleWriteReview(e) {
//   console.log('WriteReview has been clicked!!');
//   var restaurantId = $(this).closest('.restaurant').data('restaurantId');
//   console.log('id',restaurantId);
//   $('#review').data('restaurantId', restaurantId);
//   $('#review').modal();  // display the modal
// }
//
//
// //POST review (Write review)
// $('#addReview').on('click', '#addReview', writeReview);
// console.log('clicked');
// $.ajax({
//   method: 'POST',
//   url: '/api/restaurant/:restaurantId/reviews',
//   data: reviews,
//   success: writeReviewSuccess
// });
//
// function writeReview(review) {
// console.log("writing review", review);
// $('#writeReview').modal('hide');
// $('#review').append(newDonor);
// }


// //POST restaurant list
//     $('#restaurant-template').on('submit', function(e) {
//       e.preventDefault();
//       var formData = $(this).serialize();
//       $.post('/api/restaurant', formData, function(restaurant) {
//         console.log('restaurant after POST', restaurant);
//         renderRestaurant(restaurant);
//       });
//       $(this).trigger("reset");
//     });
// //
//
// // on click
// $('#restaurants').on('click', '#edit-info', handleResturantEdit);
//
// //edit Rest. information edit-info button
//   function handleResturantEdit(e) {
//     console.log('clicked!');
//     var $restaurantRow = $(this).closest('.restaurant');
//     console.log($restaurantRow);
//     var restaurantId = $restaurantRow.data('restaurant-id');
//     console.log('edit rest', restaurantId);
//
//     // edit rest. info (name, address, phone)
//     var restaurantName = $restaurantRow.find('span.name').text();
//     $restaurantRow.find('.name').html('<input class="name" value="' + name + '"></input>');
//     // edit address
//     var address = $restaurantRow.find('span.address').text();
//     $restaurantRow.find('.address').html('<input class="address" value="' + address + '"></input>');
//     // edit phone
//     var phoneNum = $restaurantRow.find('span.phoneNum').text();
//     $restaurantRow.find('.phoneNum').html('<input class="phoneNum" value="' + phoneNum + '"></input>');
//   }




// $('#restaurants').on('click', '.save-info', handleSaveInfo);
//
// $('#saveReview').on('click', '.writeReview', handleWriteReview);

// console.log('on click');
// });
//
//
//
//
//

//
//
// //Re-render restaurant info
//   function reRenderRestaraunt(restaurantId) {
//     $.get('/api/restaurant/' + restaurantId, function(data) {
//       $('div[data-restaurant-id=' + restaurantId + ']').remove();
//       renderRestaurant(data);
//     });
//   }
//
// //Save Rest. Info save-info button
//   function handleSaveInfo(e) {
//     var restaurantId = $(this).parents('.restaurant').data('restaurant-id');
//     var $restaurantRow = $('[data-restaurant-id=' + restaurantId + ']');
//
//     var data = {
//       name: $restaurantRow.find('.edit-restaurant-name').val(),
//       adress: $restaurantRow.find('.edit-restaurant-address').val(),
//       phoneNum: $restaurantRow.find('.edit-restaurant-phoneNum').val()
//     };
//     console.log('PUTing data for restaurant', restaurantId, 'with data', data);
//
//
//
//   }
// //Update rest. info
//   function handleInfoUpdate(data) {
//     console.log('response to update', data);
//
//     var restaurantId = data._id;
//     $('[data-restaurant-id=' + restaurantId + ']').remove();
//     renderRestaurant(data);
//   }
//
//
// //REVIEWS----------------------------------------------
//
// // when the write review button is clicked, display the modal
// function handleWriteReview(e) {
//   var currentRestaurantId = $(this).closest('.restaurant').data('restaurant-id');
//   console.log('id',currentRestaurantId);
//   $('#review').data('restaurant-id', currentRestaurantId);
//   $('#review').modal();
//     console.log(handleWriteReview);
// }
//
// // when the review modal submit button is clicked:
// function handleNewReviewSubmit(e) {
//   e.preventDefault();
//   var $modal = $('#review');
//   var $reviewNameField = $modal.find('#name');
//   var $reviewDateField = $modal.find('#date');
//   var $reviewPriceField = $modal.find('#price');
//   var $reviewTextField = $modal.find('#text');
// console.log('new review');
//
//   // get data from modals
//   var dataToPost = {
//     name: $reviewNameField.val(),
//     date: $reviewDateField.val(),
//     price: $reviewPriceField.val(),
//     text: $reviewTextField.val()
//   };
//   var restaurantId = $modal.data('restaurantId');
//   console.log('retrieved reviewName:', reviewName, ' and reviewDate:', reviewDate, ' reviewPrice: ', reviewPrice, ' reviewText: ', reviewText);
//   // POST to SERVER
//   var reviewPostToServerUrl = '/api/restaurant/'+ restaurantId + '/reviews';
//   $.post(reviewPostToServerUrl, dataToPost, function(data) {
//     console.log('received data from post to /review:', data);
//     // clear form
//     $reviewNameField.val();
//     $reviewDateField.val();
//     $reviewPriceField.val();
//     $reviewTextField.val();
//
//     // close modal
//     $modal.modal('hide');
//     // update restaurant to show reviews
//     fetchAndReRenderRestaurant(restaurantId);
//   }).error(function(err) {
//     console.log('post to /api/restaurant/:restaurantId/reviews resulted in error', err);
//   });
// }
//
//
// function handleUpdateReview(event) {
//   var $modal = $('#review');
//   if($modal.find('form').length < 1) {
//     $modal.modal('hide');
//     return;
//   }
//   // get rest. id
//   var restaurantId = $modal.find('form').data('restaurant-id');
//
//   var updatedReview = [];
//   $modal.find('form').each(function () {
//     var aReview = {};
//     aReview._id = $(this).attr('id');
//     aReview.name = $(this).find('input.name').val();
//     aReview.date = $(this).find('input.date').val();
//     aReview.price = $(this).find('input.price').val();
//     aReview.text= $(this).find('input.text').val();
//     console.log('found updated datareview: ', aReview);
//     updatedReview.push(aReview);
//   });
//
//   $modal.modal('hide');
//   updateReview(restaurantId, updatedReview);
//
// }
//
// function handleSaveChanges(e) {
//   var restaurantId = $(this).parents('.restaurant').data('restaurant-id');
//   var $restrauntRow = $('[data-restaruant-id=' + restaurantId + ']');
//
//   var data = {
//     name: $row.find('.name').val(),
//     address: $row.find('.address').val(),
//     phoneNum: $row.find('.phoneNum').val(),
//   };
//   console.log('PUTing data for restaurant', restaurantId, 'with data', data);
//
//   $.ajax({
//     method: 'PUT',
//     url: '/api/restaurant/' + restaurantId,
//     data: data,
//     success: handleRestaurantUpdated
//   });
// }
//
// function handleRestaurantUpdated(data) {
//   console.log('response to update', data);
//
//   var restaurantId = data._id;
//   $('[data-restaurant-id=' + RestaurantId + ']').remove();
//   renderRestaurant(data);
// }
