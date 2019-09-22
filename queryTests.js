const fakeData = require('./fakeQuery');

const { rawQuery, recursiveQuery } = require('./generateQuery');

const fs = require('fs');

const original = fs.createWriteStream('original.txt');
const updated = fs.createWriteStream('new.txt');

const query1 = recursiveQuery(fakeData.data.__type.fields);
updated.write(query1.toString());

const query2 = rawQuery(fakeData.data.__type.fields);
original.write(query2.toString());
