var express = require('express');
var router = express.Router();

// Define the "computation" route
router.get('/', function(req, res, next) {
  // Get the value of the query parameter "x" or generate a random number if not provided
  var x = parseFloat(req.query.x) || (Math.random() * 10); // Generates a random number between 0 and 10

  // Calculate the nearest single-precision float representation using Math.fround
  var froundValue = Math.fround(x);

  // Format the response string
  var responseString = `Math.fround applied to ${x} is ${froundValue}`;

  // Send the response
  res.send(responseString);
});

module.exports = router;