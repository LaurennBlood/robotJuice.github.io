$(document).on('ready', function() {  // when the page is ready and loaded ...

  var response = $.ajax('https://student.computing.edgehill.ac.uk/~walshd/cis1110api/product-reviews/bikeoil'); // import the reviews

  response.done(function(data) {  // analyse the reviews,
    for (var idx = 0; idx < data.length; idx++) { // and cycle through each one, until there are no reviews left, doing the following:

      var user = data[idx].nickname;  // extract the user name for this review.
      var reviewText = data[idx].review;  // extract the given review.
      var starRating = data[idx].rating;  // extract the rating for this review.

      if (idx < 5) {   // for the first five reviews ...
        var titles = document.getElementsByClassName('reviewTitle'); // creates a list of all the titles using their class.
        titles[idx].innerHTML = user;  // finds the title for this review, inserts the user name.
        var reviews = document.getElementsByClassName('reviewText'); // creates a list of all the review p tags.
        reviews[idx].innerHTML = reviewText; // finds the review p for this review, and adds the new text.

      } else { // make a new review entry ...

        var reviewEntry = document.createElement('li');  // create a new list element
        reviewEntry.className = 'review newReview';  // and add these classes.
        document.getElementById('reviews').appendChild(reviewEntry); // add the new list item to the review list.

        var newImg = document.createElement('img'); // creates a new image for the icon
        newImg.className = 'reviewIcon'; // gives it the right class for styling.
        newImg.src = "robot-juice-images/reviewIcon1.jpg"; // sources the image.
        reviewEntry.appendChild(newImg); // add the new image to the new review entry.

        var newDiv = document.createElement('div'); // create the middle div.
        newDiv.className = 'reviewMiddle'; // give it the right class.
        reviewEntry.appendChild(newDiv); // and add the div to the review entry.

        var newTitleTag = document.createElement('p'); // create a new p tag...
        newTitleTag.className = 'reviewTitle'; // for the review title.
        var newTitle = document.createTextNode(user); // create a text node with the user name
        newTitleTag.appendChild(newTitle); // add the text node to the title tag
        newDiv.appendChild(newTitleTag); // add the title tag to the middle div.

        var newReviewTag = document.createElement('p'); // create a new p tag...
        newReviewTag.className = 'reviewText'; // for the actual review, so add the class.
        var newReview = document.createTextNode(reviewText); // add the review to a text node,
        newReviewTag.appendChild(newReview); // and add that text node to the p.
        reviewEntry.appendChild(newReviewTag); // add the new p to the review entry.

        reviewEntry.style.display = "none"; // remove any default display of the new list item.
      }

      var middleDivs = document.getElementsByClassName('reviewMiddle'); // locates all the divs with the class 'reviewMiddle'

      var showOfStars = document.createElement('div'); // creates a new div ...
      showOfStars.className = 'starsDiv'; // with a new class with a flex display so the stars align horizontal.
      var rStars = document.createElement('h2'); // creates the h2 tag for the red stars
      rStars.className = 'redStars'; // applies the red star class
      var gStars = document.createElement('h2'); // creates the h2 tag for the grey stars
      gStars.className = 'greyStars'; // applies the grey star class.

      showOfStars.appendChild(rStars); // add both the red stars and grey stars to the div.
      showOfStars.appendChild(gStars);

      if (starRating == 0) {  // deterines the amount of red stars and grey stars for each star rating ....
        var redStars = document.createTextNode('');
        var greyStars = document.createTextNode('*****');
      } else if (starRating == 1) {
        var redStars = document.createTextNode('*');
        var greyStars = document.createTextNode('****');
      } else if (starRating == 2) {
        var redStars = document.createTextNode('**');
        var greyStars = document.createTextNode('***');
      } else if (starRating == 3) {
        var redStars = document.createTextNode('***');
        var greyStars = document.createTextNode('**');
      } else if(starRating == 4) {
        var redStars = document.createTextNode('****');
        var greyStars = document.createTextNode('*');
      } else {
        var redStars = document.createTextNode('*****');
        var greyStars = document.createTextNode('');
      }

      rStars.appendChild(redStars); // then append the determined text node to the h2 tags.
      gStars.appendChild(greyStars);

      middleDivs[idx].insertBefore(showOfStars, middleDivs[idx].firstChild); // add the star rating div to the middle div, but as the first child.

    }
  });

  $('#moreReviews').on('click', function(event) {
  event.preventDefault();

  var toggleReviews = document.getElementById("moreReviews");
  var addedReviews = document.getElementsByClassName('newReview');

  if (toggleReviews.className === "reviewsHidden") {
    toggleReviews.className = "reviewsShown";

    for (var i = 0; i < addedReviews.length; i++) {
      addedReviews[i].style.display = "grid";
    }

  } else {
    toggleReviews.className = "reviewsHidden";
    for (var i = 0; i < addedReviews.length; i++) {
      addedReviews[i].style.display = "none";
    }
  }

  });
});
