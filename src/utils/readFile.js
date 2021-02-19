const fs = require('fs');

function fread(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}
module.exports = {
  fread,
};
