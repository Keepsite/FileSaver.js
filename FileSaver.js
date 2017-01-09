var util = require('util');
var fs = require('file-saver');

module.exports.saveAs = util.deprecate(
  fs.saveAs,
  "use require('file-saver') instead"
)
