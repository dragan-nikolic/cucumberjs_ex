const {AfterAll, BeforeAll} = require('cucumber');

let app = undefined;

// Synchronous
BeforeAll(function () {
  // perform some shared setup
});

// Asynchronous
AfterAll(async function () {
  console.log('***** after all');
  await this.app.stop();
});
