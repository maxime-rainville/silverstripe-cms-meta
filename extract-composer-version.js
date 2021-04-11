#! /usr/bin/env node

const fs = require('fs');
const modules = require('./src/lib/data.json');

// Get a list of supported modules
const supportedMods = modules
  .filter(({supported}) => supported)
  .map(({name, repo}) => name || repo)

const reducer = (accumulator, { name, version }) => (
  supportedMods.includes(name) ?
    { ...accumulator, [name]: version.replace('.x-dev', '') } :
    accumulator
);

// Read composer lock file
const args = process.argv.slice(2);
let rawdata = fs.readFileSync(args[0]);
let data = JSON.parse(rawdata);

// Build list of packages
let dep = data['packages'].reduce(reducer, {});
dep = data['packages-dev'].reduce(reducer, dep);

// Write out the JSON data
process.stdout.write(
  JSON.stringify(dep)
);
