var Obfuscator = require('../index.js');
var obfuscator = new Obfuscator();
var assert = require('assert');

suite('Encode / Decode', function () {

  var test_string = "The wheels on the bus go round and round";
  var test_email = "bill.murray@caddyshack.com";
  var encoded_string;
  var encoded_email;

  test('encode string', function (done) {
    encoded_string = obfuscator.encode(test_string);
    assert.notEqual(test_string, encoded_string, 'Encoded should not match original');
    done();
  });

  test('decode string', function (done) {
    var decoded = obfuscator.decode(encoded_string);
    assert.equal(test_string, decoded, 'Decoded should match original');
    done();
  });

  test('encode email', function (done) {
    encoded_email = obfuscator.encode(test_email);
    assert.notEqual(test_email, encoded_email, 'Encoded should not match original');
    done();
  });

  test('decode email', function (done) {
    var decoded = obfuscator.decode(encoded_email);
    assert.equal(test_email, decoded, 'Decoded should match original');
    done();
  });

});