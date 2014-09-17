var through = require('through')
  , falafel = require('falafel')
  , unparse = require('escodegen').generate
  , util = require('util')
  , minimist = require('minimist')

var argv = minimist(process.argv.slice(2))

var defaultLang = argv['jedify-lang'] || process.env['JEDIFY_LANG'] || 'en'

var re = /\.js$/

module.exports = function (file, options) {
  if (!re.test(file)) return through()
  options = options || {}
  var lang = options.lang || defaultLang;

  var buf = []
    , stream = through(write, end)

  return stream

  function write(chunk) {
    buf.push(chunk)
  }

  function end () {
    var output = buf.join('')
    try {
      output = falafel(output, function (node) {
        if (node.type === 'CallExpression' &&
            node.callee.type === 'Identifier' &&
            node.callee.name === 'requirePo')
        {
          var dir = new Function([], 'return ' + unparse(node.arguments[0]))()
          dir = util.format(dir, lang)
          node.update('require(' + JSON.stringify(dir) + ')')
        }
      }).toString()
    } catch (err) {
      this.emit('error', new Error(err.toString().replace('Error: ', '') + ' (' + file + ')'))
    }

    stream.queue(output)
    stream.queue(null)
  }

}
