$(document).ready(function() {

  $( "#tweet-text" ).keyup(function(e) {
    var tweetlength = e.target.value.length;

    $(".counter").text (140 - tweetlength);
    if (tweetlength > 140 ) {
      $(".counter").css("color", "red");
    } else {
      $(".counter").css("color", "black");
    }
  
  });
});