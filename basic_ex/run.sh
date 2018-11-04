# Convenience script for running tests.
#
# Parameters:
# $1 environment (dev or stage or prod)
# $2 and after are standard Cucumberjs parameters
#
# Usage examples:
# $ ./run.sh stage
# $ ./run.sh prod
# $ ./run.sh stage features/<name>.feature
#./node_modules/.bin/cucumber-js --tags '@$1 or @all' ${@:2}
./node_modules/.bin/cucumber-js -p $1 ${@:2}
