var currentQuote = "";
var currentAuthor = "";

var getQuoteContent = function() {
 $.ajax({
    headers: {
     "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
     Accept: "application/json",
    },

    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',

    success: function(response) {
      var responseObj = JSON.parse(response);
      currentQuote = responseObj.quote;
      currentAuthor = responseObj.author;
      $(".quote_body").html("<span" + " class='quote_span'>" + currentQuote +"</span>")
      $(".quote_author").html("<span" + " class='author_span'>" + currentAuthor +"</span>")
    }
  })
};

var tweetQuote = function() {
  $('.tweet_quote_button')
    .attr('href',
      'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
    );
}

$(document).ready(function() {
  getQuoteContent();
  $('.random_quote_machine_button').on('click', getQuoteContent);
  $('.tweet_quote_button').on('click',tweetQuote);
})

