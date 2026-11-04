const assert = require('node:assert/strict');
const hello = require('./index.js');

assert.equal(
  hello(),
  'Hello from Cloudsmith'
);

console.log('PASS: Package returns the expected message');
