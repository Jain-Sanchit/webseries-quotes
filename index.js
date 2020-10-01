var array = require("./data/data.json");
var jokes = require("./data/jokes.json");

var quotes = {};

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


module.exports.getQuote = function (name) {
  var index = randomInt(0, 437);
  
  quotes.Quote = array[index].Quote;
  quotes.Author = array[index].Author;
  
  
  return quotes;
};

module.exports.getJoke = function() {
  const index = randomInt(0, jokes.length - 1);
  const joke = jokes[index];

  return joke;
};
