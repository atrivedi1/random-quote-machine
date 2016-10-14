var currentQuote = "";
var currentAuthor = "";

var getQuoteContent = function() {
 $.ajax({
    headers: {
     "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
     Accept: "application/json",
     "Content-Type": "appliation/x-www-form-urlencoded"
    },

    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',

    success: function(response) {
      var responseObj = JSON.parse(response);
      currentQuote = responseObj.quote;
      currentAuthor = responseObj.author;
      $(".quote_body").html("<span>" + currentQuote +"</span>")
      $(".quote_author").html("<span>" + currentAuthor +"</span>")
    }
  })
}

$(document).ready(function() {
  getQuoteContent();
  $('.random_quote_machine_button').on('click', getQuoteContent);
})

