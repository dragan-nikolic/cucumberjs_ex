# Usage:
# $ ./run.sh <browser>
# where browser is one of {firefox, chrome} (default: chrome)
browser=$1
browser=${browser:=chrome}

./node_modules/.bin/cucumber-js \
    --world-parameters "{\"browser\": \"${browser}\"}" \
    ${@:2}
