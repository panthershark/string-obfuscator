var BasePlugin = require('mixdown-app').Plugin;
var _ = require('lodash');
var crypto = require('crypto');

// Create a new plugin from the base plugin class.
// this._options is the options hash that was passed on init.
module.exports = BasePlugin.extend({

  init: function (options) {
    this._super(_.defaults(options || {}, {
      algorithm: 'aes-256-ctr',
      password: 'WhoLetTheDogsOut?!'
    }));
  },

  encode: function (str) {
    var cipher = crypto.createCipher(this._options.algorithm, this._options.password);
    var str_encoded = cipher.update(str, 'utf8', 'hex');
    str_encoded += cipher.final('hex');
    return str_encoded;
  },

  decode: function (str) {
    var decipher = crypto.createDecipher(this._options.algorithm, this._options.password)
    var str_decoded = decipher.update(str, 'hex', 'utf8')
    str_decoded += decipher.final('utf8');
    return str_decoded;
  }

});