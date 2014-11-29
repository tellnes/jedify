# jedify <sup>[![Version Badge](http://vb.teelaun.ch/tellnes/jedify.svg)](https://npmjs.org/package/jedify)</sup>

[![Dependency Status](https://david-dm.org/tellnes/jedify.png)](https://david-dm.org/tellnes/jedify)
[![devDependency Status](https://david-dm.org/tellnes/jedify/dev-status.png)](https://david-dm.org/tellnes/jedify#info=devDependencies)
[![Tips](https://img.shields.io/gratipay/tellnes.svg)](https://gratipay.com/tellnes/)


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
