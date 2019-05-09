const fs = require('fs');
const _ = require('lodash');
const md5 = require('md5');
const buildAlgolia = require('./buildAlgolia');

// This assumes the version of the spec in data/ is the current version
const spec = require('src/data/spec.json');

const BASE_URL = 'https://developers.linode.com/api/v4/';


const buildIndex = () => {
  const index = [];
  for (const [key, value] of Object.entries(spec.paths)) {
    const methodNames = Object.keys(value);
  
    methodNames.forEach(methodName => {
      const entry = {}
      if (['get', 'put', 'post', 'delete'].includes(methodName)) {
        const thisMethod = value[methodName];
        entry.name = thisMethod.summary;
        entry.tags = thisMethod.tags;
        entry.description = thisMethod.description.trim();
        entry.href = getUrl(key);
        entry.objectID = md5(key);
        index.push(entry);
      }
    });
  };
  return index;
}

const getUrl = (endpoint) => {
  const url = _.kebabCase(endpoint);
  return BASE_URL + url;
}

// Generate an array of objects representing index entries
const index = buildIndex();

// Replace the current Algolia index (linode-api-spec) with the current one
buildAlgolia(index);

// Save a copy of the index to file for reference.
fs.writeFile('index.json', JSON.stringify(index), (err) => {
  if (err) {
    console.error(err);
  }
});