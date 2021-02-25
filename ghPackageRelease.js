#! /usr/bin/env node
var data = require('./package.json');
const ghRef = process.env.GITHUB_REF
if (!ghRef) {
  throw Error('GITHUB_REF is undefined');
}

const version = ghRef.replace('refs/tags/', '');

if (!version.match(/^\d+\.\d+\.\d+/)) {
  throw Error('Version must follow a 1.12.123 format');
}

const fs = require('fs');
fs.writeFile(
  './package.json',
  JSON.stringify({ ...data, version }),
  'utf8',
  () => { }
)
