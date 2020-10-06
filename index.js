const quotes = require("./data/data.json");
const jokes = require("./data/jokes.json");
const puns = require("./data/puns.json");

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports.getQuote = function() {
  const index = randomInt(0, quotes.length - 1);
  return quotes[index];
};

module.exports.getJoke = function() {
  const index = randomInt(0, jokes.length - 1);
  return jokes[index];
};

module.exports.getPun = function() {
  const index = randomInt(0, puns.length - 1);
  return puns[index];
};
