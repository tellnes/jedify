# jedify

[![Version npm](https://img.shields.io/npm/v/jedify.svg?style=flat-square)](https://www.npmjs.com/package/sni-reader)[![npm Downloads](https://img.shields.io/npm/dm/sni-reader.svg?style=flat-square)](https://www.npmjs.com/package/sni-reader)[![Build Status](https://img.shields.io/travis/tellnes/sni-reader/master.svg?style=flat-square)](https://travis-ci.org/tellnes/sni-reader)[![Dependencies](https://img.shields.io/david/tellnes/sni-reader.svg?style=flat-square)](https://david-dm.org/tellnes/sni-reader)[![Tips](http://img.shields.io/gratipay/tellnes.png?style=flat-square)](https://gratipay.com/~tellnes/)


Browserify transformer for po files.

## Usage

Somewhere in your client js:

```js
var i18n = requirePo('./local/%s.po')
```

Now `i18n` will be an [Jed](http://slexaxton.github.io/Jed/) instance.

`%s` will be replaced with the current selected language.
The language can be selected by defining the `lang` parameter to `jedify`.
The `lang` parameter in jedify defaults to `en`.

Eg.

```bash
browserify -t [jedify --lang nb_NO] entry.js
```

or

```javascript
var browserify = require('browserify')
  , jedify = require('jedify')

var b = browserify()
b.add('./entry.js');
b.transform(jedify, { lang: 'nb_NO' })
b.bundle().pipe(process.stdout)
```

## Install

```bash
npm install jedify
```

## License

MIT
