$(document).on('ready', function() {  // when the page is ready and loaded ...

  // ----- nav interactions -------------
  $('#thisPage').on('click', function(event) {  //  if the current page is selected in the nav,
    event.preventDefault();  // return the following message.
    alert("You have already selected this page. Please try a different one.");
  });

  $('#navProtect').on('click', function(event) {  //  if this page is selected in the nav,
    event.preventDefault();  // return the following message.
    alert("Get ready to protect your oil. Coming soon.");
  });

  $('#navStocklists').on('click', function(event) {  //  if this page is selected in the nav,
    event.preventDefault();  // return the following message.
    alert("We're always updating our stock, check back soon to see what's new!");
  });

  $('#navEvents').on('click', function(event) {  //  if this page is selected in the nav,
    event.preventDefault();  // return the following message.
    alert("Find out where you can help us kill the planet soon!");
  });


  $('#navReviews').on('click', function(event) {  //  if this page is selected in the nav,
    event.preventDefault();  // return the following message.
    alert("Read our current reviews on the product page.");
    window.location.href = "product.html"; // loads the product page.
  });

  // --------------------------------------------------------------------

  $('#buyButton').on('click', function(event) {  //  if this page is selected in the nav,
    event.preventDefault();  // return the following message.

    var buyItemsButton = document.getElementById("productPurchase").button;

    alert("You cannot purchase our product right now.");
  });


});
