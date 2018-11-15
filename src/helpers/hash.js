var md5File = require('md5-file')
 
module.exports = function(file) {
    var result = md5File.sync(file);
    return result;
}