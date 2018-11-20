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
# $ ./run.sh stage --tags smoke --format summary (run all smoke tests on stage env)
./node_modules/.bin/cucumber-js \
    -r ./steps -r ./support \
    --tags 'not @wip' --tags 'not @manual' \
    -p $1 \
    ${@:2}
