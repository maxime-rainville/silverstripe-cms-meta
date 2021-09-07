#! /usr/bin/env bash

TMPDIR=/tmp/test-composer-project

if [ -d "$TMPDIR" ]; then rm -Rf $TMPDIR; fi

# Build composer file in tmp folder
composer create-project $1 $TMPDIR $2 --no-interaction --no-install --quiet
(cd $TMPDIR && composer update --no-interaction --no-install --quiet)

# Create JSON file
mkdir -p src/lib/release-set/$1
node extract-composer-version.js $TMPDIR/composer.lock $1 $2 > src/lib/release-set/$1/$2.json

rm -Rf $TMPDIR
