var test = require('tap').test
  , po = require('../po')
  , path = require('path')
  , fs = require('fs')

test(function (t) {
  t.plan(1)

  var base = path.join(__dirname, 'fixtures', 'plural')

  var stream = po(base + '.po')
  fs.createReadStream(base + '.po').pipe(stream)

  var data = []
  stream.on('data', function (chunk) {
    data.push(chunk)
  })
  stream.on('end', function () {
    data = data.join('')
    t.equal(data, fs.readFileSync(base + '.js').toString())
    t.end()
  })
})
