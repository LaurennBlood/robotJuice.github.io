$(document).on('ready', function() {  // when the page is ready and loaded ...

  sessionStorage.setItem('answeredYes', 0); // during the current session, how many clicks have occured on each button.
  sessionStorage.setItem('answeredNo', 0);

  // the following code can be used to reset the vote counts on the local computer, this is not required for
  // functionality but is useful for development. >>>

  // localStorage.setItem('answeredYes', 0);
  // localStorage.setItem('answeredYes', 0);

  $('#pollYes').click(function(event) { // when you click the yes radio button ...
    event.preventDefault(); // prevent the automatic changes.

    try {
      var answeredYes = localStorage.getItem('answeredYes') // see if this computer has previously visited the page and use the yes vote ...
    } catch {
      var answeredYes = sessionStorage.getItem('answeredYes'); // if not, use session storage from scratch.
    }

    answeredYes++; // wherever answeredYes is stored, increment the value by one.

    var label = $(this).next(); // find the label of the button as they are separate entities.
    label.text( answeredYes.toString(10) + ' people have responded yes!'); // and the label text to include the total clicks.

    localStorage.setItem('answeredYes', answeredYes); // update the local storage, or create new local storage to contain the number of yes votes.

  });

  $('#pollNo').click(function(event) { // when you click the no radio button ...
    event.preventDefault();  // prevent the automatic changes.

    try {
      var answeredNo = localStorage.getItem('answeredNo') // see if this computer has previously visited the page and use the no vote ...
    } catch {
      var answeredNo = sessionStorage.getItem('answeredNo'); // if not, use session storage from scratch.
    }

    answeredNo++; // wherever answeredYes is stored, increment the value by one.

    var label = $(this).next(); // find the label of the button as they are separate entities.
    label.text( answeredNo.toString(10) + ' people have responded no!');  // and the label text to include the total clicks.

    localStorage.setItem('answeredNo', answeredNo); // update the local storage, or create new local storage to contain the number of no votes.

  });
});
