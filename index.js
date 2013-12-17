var through = require('through')
  , tJS = require('./js')
  , tPO = require('./po')

var reJS = /\.js$/
  , rePO = /\.po$/

module.exports = function (file) {
  if (reJS.test(file)) return tJS(file)
  if (rePO.test(file)) return tPO(file)
  return through()
}
