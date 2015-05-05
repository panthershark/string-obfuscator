var BasePlugin = require('mixdown-app').Plugin;
var _ = require('lodash');
var crypto = require('crypto');
var sep = '_';

// Create a new plugin from the base plugin class.
// this._options is the options hash that was passed on init.
module.exports = BasePlugin.extend({

  init: function (options) {
    this._super(_.defaults(options || {}, {
      algorithm: 'aes-256-ctr',
      password: 'WhoLetTheDogsOut?!',
      random_length: false
    }));
  },

  encode: function (s) {
    var str = s;

    if (this._options.random_length) {
      var padding = crypto.randomBytes(Math.ceil(Math.random() * 32), 'hex').toString();
      str = padding.length + sep + padding + str;
    }

    var cipher = crypto.createCipher(this._options.algorithm, this._options.password);
    var str_encoded = cipher.update(str, 'utf8', 'hex');
    str_encoded += cipher.final('hex');
    return str_encoded;
  },

  decode: function (s) {

    var decipher = crypto.createDecipher(this._options.algorithm, this._options.password)
    var str = decipher.update(s, 'hex', 'utf8')
    str += decipher.final('utf8');

    if (this._options.random_length) {
      var iSep = str.indexOf(sep);

      // retrieve length
      var padding_length = str.slice(0, iSep);

      // remove the sep and the padding, remainder is the original string.
      str = str.slice(padding_length.length + sep.length + Number(padding_length));
    }


    return str;
  }

});