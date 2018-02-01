# Spectron Example

Note: Running tests using command 'npm test' in Windows does not work.
The following error is generated: 
  'Windows Script Host'
  Error: Invalid character

To run succesfully in Windows use following format:
- Make sure no GC client instance is already running, then
$ ./node_modules/.bin/cucumber.js -r ./steps ...
