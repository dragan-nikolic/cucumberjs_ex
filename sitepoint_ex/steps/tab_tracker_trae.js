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
  });

  When('I add new song', async function () {
    let response;
    try {
      response = await request.post(
        'http://localhost:8081/songs',
        {
          title: 'Kad hodas',
          artist: 'Riblja Corba',
          genre: 'Rock',
          album: 'Veceras vas zabavljaju muzicari koji piju',
          albumImageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b8/Muzicarikojipijiu.jpg',
          youtubeId: '79rN-2a13Tc',
          lyrics: 'mesec je bleda fleka boje cimeta',
          tab: 'C       Em        G         Am'
        });
      this.new_song = response.data;
      console.log('-----add new song data-------------------------------');
      console.log(this.new_song);
      console.log('------------------------------------');
    } catch(err) {
      console.log('-----error-------------------------------');
      console.log(err);
      console.log('------------------------------------');
    }

    assert.equal(response.status, 200, `Incorrect status code - ${response.status}`);
  });

  Then('I should see the same song in the database', async function () {
    let response;
    try {
      response =  await request.get(`http://localhost:8081/songs/${this.new_song.id}`);
      this.song = response.data;
      console.log('----verify song--------------------------------');
      console.log(this.song.title);
      console.log('------------------------------------');
    } catch(err) {
      console.log('-----error-------------------------------');
      console.log(err);
      console.log('------------------------------------');
    }  
    assert.equal(response.status, 200, 'Incorrect status code');
    assert.equal(this.song.title, this.new_song.title, 'incorrect song title');
  });
});
