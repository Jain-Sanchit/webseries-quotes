# Web Series Quotes


[![NPM VERSION](http://img.shields.io/npm/v/webseries-quotes.svg?style=flat&logo=npm)](https://www.npmjs.com/package/webseries-quotes) 

#### A basic [NPM](https://www.npmjs.com/package/webseries-quotes) Package which returns random Web Series Quotes & Dialogues. It provides awesome quotes to display in your application. Get the best quotes and dialogues from best TV shows and enjoy.

**Click [here](https://www.npmjs.com/package/webseries-quotes)** to view this package on **NPM** registry. 

## Getting started

[![NPM](https://nodei.co/npm/webseries-quotes.png?compact=true)](https://nodei.co/npm/webseries-quotes/)

```
$ npm install --save webseries-quotes
```
## Installation

[![NPM INSTALL](http://img.shields.io/badge/npm-install-blue.svg?style=flat&logo=npm)](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) [![NODE JS](http://img.shields.io/badge/Node-JS-teal.svg?style=flat&logo=node.js)](https://nodejs.org/en/) [![webseries-quotes](http://img.shields.io/badge/npm-webseries--quotes-red.svg?style=flat&logo=npm)](https://www.npmjs.com/package/webseries-quotes)


This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

Installation is done using the
**[`npm install`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)** command:

```bash
$ npm install inspirational-quotes
```

## Usage

- ***getQuote()*** method returns an object containing ***Quote*** and ***Author***.

```json
 {  
    "Quote":"I am the danger..",
    "Author":"HeisenBerg , Breaking Bad"
 }
 ```

 ```js
const Quote = require('webseries-quotes');
console.log(Quote.getQuote());
```

- **_getJoke()_** method returns an object containing **_Text_**

```json
{
  "Text": "I ate a clock yesterday, it was very time-consuming."
}
```

```js
const { getJoke } = require('webseries-quotes');
console.log(getJoke());
```

# Contributing
**Star the Repo , Fork it , then make a pull request** 
When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change.

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a
   build.
2. Update the README.md with details of changes to the interface, this includes new environment
   variables, exposed ports, useful file locations and container parameters.
3. If possible attach screenshots of changes and write comments and a proper description while making a   pull request
4. Once a developer or team member review your PR , you will get a review or it will be merged.

## Oh, Thanks!

[![Built with Love](https://forthebadge.com/images/badges/built-with-love.svg)](https://www.npmjs.com/~jain-sanchit)



> **One day your life will flash before your eyes. Make sure it is worth watching!**
