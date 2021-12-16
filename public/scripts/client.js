/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const $tweet = createTweetElement(tweetData);
$('#tweets-container').append($tweet);
//get how many days between today and the date when the tweet was created
$dateCreated = new Date(tweetData.created_at);
$dateToday = new Date();

$timeDiff = Math.abs($dateToday.getTime() - $dateCreated.getTime());
$diffDays = Math.ceil($timeDiff / (1000 * 3600 * 24));





const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container


    //clear the container before to read all tweets
    $("#tweets-container").empty();

    // loops through tweets from newer to older
    for (let i in tweets) {
  
      // calls createTweetElement for each tweet
      $tweet = createTweetElement(tweets[i]);
  
      // takes return value and appends it to the tweets container
      $('#tweets-container').prepend($tweet);
    }
  
  }
}

const createTweetElement = function(tweet) {
  let $tweet = /* Your code for creating the tweet element */
  (`<article>` +
  `<header>` +
    `<img src="${tweetData.user.avatars.small}">` +
    `<h2>${tweetData.user.name}</h2>` +
    `<span>${tweetData.user.handle}</span>` +
  `</header>` +
  `<div class="body">${tweetData.content.text}</div>` +
  `<footer>` +
    `<span class="daysAgo">${$diffDays} days ago</span>` +
    `<span class="likes" data-id="${tweetData._id}" data-total-of-likes="${tweetData.likes}"><b>Likes: ${tweetData.likes}</b></span>` +
    `<div class="options">` +
      `<span><i class="fa fa-flag" aria-hidden="true"></i></span>` +
      `<span><i class="fa fa-retweet" aria-hidden="true"></i></span>` +
      `<span class="${$class}"><i class="fa fa-heart" aria-hidden="true"></i></span>` +
    `</div>` +
  `</footer>` +
`</article>`);

//return the structure to append to html
  return $tweet;
}

renderTweets(data);