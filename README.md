# string-obfuscator
Encodes and Decodes (encrypts and decrypts) strings.  Supports random length encoded values.

# Usage

```
var Obfuscator = require('string-obfuscator');
var obfuscator = new Obfuscator({
	algorithm: 'aes-256-ctr',
  password: 'WhoLetTheDogsOut?!',
  random_length: true
});


var str = 'I let the dogs out.';

var encoded = obfuscator.encode(str);
console.log(encoded);  // ==> random length encoded string

var decoded = obfuscator.decode(encoded);
assert.equal(decoded, str, 'Strings match');  // ==> true

console.log(decoded);  // ==> 'I let the dogs out.'
```

# Configuration

* algorithm: {string} Valid string from ```crypto.getCiphers();```
* password: {string} The password used for the cipher.  (see crypto lib)
* random_length: {boolean} If true, then a random length padding is added to the value before encrypting.  This will produce n variations of the encoded string.  If false, then the value is simply encrypted using the algorithm and password.

