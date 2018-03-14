const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');

defineSupportCode(function({ Given, Then, When }) {
  Given('I start with {int}', function (input) {
    this.answer = input;
  });

  When('I add {int}', function (input) {
    this.answer = this.answer + input;
  });

  When('I substruct {int}', function (input) {
    this.answer = this.answer - input;
  });

  When('I multiply by {int}', function (input) {
    this.answer = this.answer * input;
  });

  Then('I end up with {int}', function (input) {
    assert.equal(this.answer, input);
  });
});
