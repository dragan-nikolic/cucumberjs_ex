# Spectron Example

This example is based on Milan's POC https://bitbucket.org/milansub/cmapp-automated-tests.
Milan's work is using Mocha and Spectron, while this example is implementing
the same using Cucumber and Spectron.

To run succesfully in Windows use following format:
- Make sure no GC client instance is already running, then
$ npm test .\features\gc_login.feature:2
