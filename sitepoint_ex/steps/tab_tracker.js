const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');
const request = require('request');

let $songs;

defineSupportCode(function({ Given, Then, When }) {
  When('I make TT call to get all songs', function (callback) {
    request.get('http://localhost:8081/songs', (err, response, body) => {
      if (err) {
        callback(err);
      } else {
        assert.equal(
          response.statusCode, 
          200,
          'Incorrect response status!')

        $songs = JSON.parse(body);
        callback();
      }
    })
  });

  Then('I should see all the songs in the database', () => {
    assert.equal(
      $songs.length, 
      3, 
      `Incorrect number of songs! (${$songs.length})`);
  });
});
