$(document).ready(function() {

  $(".textArea").keyup(function(e) {
    let tweetlength = e.target.value.length;
  
    $(".counter").text(140 - tweetlength);
    if (tweetlength > 140) {
      $(".counter").css("color", "red");
    } else {
      $(".counter").css("color", "black");
    }

  });
});