const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');
const request = require('trae');

defineSupportCode(function({ Given, Then, When }) {
  When('I make TT trae call to get all songs', async function() {
    try {
      response =  await request.get('http://localhost:8081/songs');
      assert.equal(response.status, 200, 'Incorrect status code');
      this.songs = response.data;
      console.log('----data--------------------------------');
      console.log(this.songs[0].title);
      console.log(this.songs.length);
      console.log('------------------------------------');
    } catch(err) {
      console.log('-----error-------------------------------');
      console.log(err);
      console.log('------------------------------------');
    }
  })
});
