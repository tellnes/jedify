var through = require('through')
  , po2json = require('po2json')

var re = /\.po$/

module.exports = function (file) {
  if (!re.test(file)) return through()

  var stream = through(write, end)
    , buf = []

  return stream

  function write(chunk) {
    buf.push(chunk)
  }

  function end() {
    var output = buf.join('')
    try {
      output = po2json.parse(output, { format: 'jed1.x' })
      var messages = output['locale_data']['messages']
      output = JSON.stringify(output)
    } catch (err) {
      this.emit('error', new Error(err.toString().replace('Error: ', '') + ' (' + file + ')'))
    }
    output = 'module.exports = require("jedify")(' + output + ')'
    stream.push(output)
    stream.push(null)
  }
}
