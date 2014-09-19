var through = require('through')
  , tJS = require('./js')
  , tPO = require('./po')

var reJS = /\.js$/
  , rePO = /\.po$/

module.exports = function (file, options) {
  if (reJS.test(file)) return tJS(file, options)
  if (rePO.test(file)) return tPO(file, options)
  return through()
}
