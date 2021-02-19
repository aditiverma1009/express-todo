const fs = require('fs');
const promisifyFs = require('../readFile');

test("fread should resolve with value 'this is async'", () => {
  jest.spyOn(fs, 'readFile')
    .mockImplementation((path, options, callback) => {
      callback(null, 'this is async');
    });
  return expect(promisifyFs.fread()).resolves.toBe('this is async');
});

test("fread should reject with error message 'error' ", () => {
  jest.spyOn(fs, 'readFile')
    .mockImplementation((path, options, callback) => {
      callback(new Error('error'), null);
    });
  return expect(promisifyFs.fread()).rejects.toEqual(Error('error'));
});
