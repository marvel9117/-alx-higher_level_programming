#!/usr/bin/node

const fs = require('fs');
const file = process.argv[2];
const fileContent = process.argv[3];

fs.writeFile(file, fileContent, function (err) {
  if (err) {
    console.error(err);
  }
});
