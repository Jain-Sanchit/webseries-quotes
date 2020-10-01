var quotes = require("./data/data.json");
var jokes = require("./data/jokes.json");

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports.getQuote = function (name) {
  var index = randomInt(0, quotes.length - 1);
  const quote = quotes[index];
  
  return quote;
};

module.exports.getJoke = function() {
  const index = randomInt(0, jokes.length - 1);
  const joke = jokes[index];

  return joke;
};
