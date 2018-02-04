const defineSupportCode = require('cucumber').defineSupportCode;
const Application = require('spectron').Application;
const assert = require('assert');

defineSupportCode(function({ Given, Then, When }) {
  When('I start GameClient', async function () {
    app = new Application({
      path: 'C:\\Program Files\\GameCredits\\Client\\0.7\\gc-client.exe',
    });
    await app.start();
  });

  Then('I should see GameClient app open', async function () {
    assert.notEqual(app, undefined, 'app is undfined!');
  });

  When('I enter email {string} and password {string}', async function (email, password) {
  });

  Then('I should see the user is logged in', function () {
  });
});
