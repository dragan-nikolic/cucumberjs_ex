const {AfterAll, BeforeAll} = require('cucumber');

let app = undefined;

// Synchronous
BeforeAll(function () {
  // perform some shared setup
});

// Asynchronous
AfterAll(async function () {
  await this.app.stop();
});
