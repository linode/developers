algoliasearch = require('algoliasearch'),
randomstring = require('randomstring');

const updateAlgolia = (records) => {
  if (!process.env.ALGOLIA_API_KEY || !process.env.ALGOLIA_API_SECRET) {
    throw new Error('Algolia credentials not found. Please add them to your .env file.')
  }
  
  console.log("Updating Algolia with API key: " + process.env.ALGOLIA_API_KEY);

  const client = algoliasearch(process.env.ALGOLIA_API_KEY, process.env.ALGOLIA_API_SECRET);
  const index = client.initIndex('linode-api-spec');
  const indexName = 'linode-api-spec-tmp-'+randomstring.generate(5);
  console.log('Creating temporary index with name: ' + indexName);
  const tmp = client.initIndex(indexName);

  // Copy settings to temporary index
  console.log('Copying settings from existing index to temporary index');
  client.copyIndex('linode-api-spec', indexName, ['settings', 'synonyms', 'rules'], (err, content) => {
      if (err) throw err;

      // Browse the current index (as in the example docs, seems necessary
      // to activate the index since initIndex doesn't actually init the index)
      const oldRecords = [];
      index.browseAll((item) => {
          oldRecords.push(item);
      });

      console.log('Found ' + String(records.length) + ' records.');
      console.log('Adding records to temporary index.');

      tmp.addObjects(records, (err,content) => { 
          if (err) { throw err;}

          // Move temporary index to linode-api-spec (overwrites existing index)
          console.log('Moving temporary index to linode-api-spec.');
          client.moveIndex(indexName, 'linode-api-spec', (err, content) => {
              if (err) throw err;
              console.log('Index successfully updated.');
          });
      });
  });
}

module.exports = updateAlgolia;