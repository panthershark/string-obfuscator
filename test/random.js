var Obfuscator = require('../index.js');
var obfuscator = new Obfuscator({
  random_length: true
});
var assert = require('assert');

suite('Encode / Decode', function () {

  var test_string = "The wheels on the bus go round and round";
  var test_email = "bill.murray@caddyshack.com";
  var encoded_string = [];
  var encoded_email = [];

  test('encode string', function (done) {
    encoded_string.push(obfuscator.encode(test_string));
    encoded_string.push(obfuscator.encode(test_string));
    encoded_string.push(obfuscator.encode(test_string));

    encoded_string.forEach(function (str) {
      assert.notEqual(str, test_string, 'Encoded should not match original');
    });

    assert.notEqual(encoded_string[0], encoded_string[1], 'Each encoded value should be different');
    assert.notEqual(encoded_string[1], encoded_string[2], 'Each encoded value should be different');

    done();
  });

  test('decode string', function (done) {

    encoded_string.forEach(function (str) {
      assert.equal(obfuscator.decode(str), test_string, 'Decoded should match original');
    });

    done();
  });

  test('encode email', function (done) {
    encoded_email.push(obfuscator.encode(test_email));
    encoded_email.push(obfuscator.encode(test_email));
    encoded_email.push(obfuscator.encode(test_email));

    encoded_email.forEach(function (str) {
      assert.notEqual(str, test_email, 'Encoded should not match original');
    });

    assert.notEqual(encoded_email[0], encoded_email[1], 'Each encoded value should be different');
    assert.notEqual(encoded_email[1], encoded_email[2], 'Each encoded value should be different');

    done();
  });

  test('decode email', function (done) {
    encoded_email.forEach(function (str) {
      assert.equal(obfuscator.decode(str), test_email, 'Decoded should match original');
    });

    done();
  });

});