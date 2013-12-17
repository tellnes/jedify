# jedify

Browserify transformer for po files.

## Usage

Somewhere in your client js:

```js
var i18n = requirePo('./local/%s.po')
```

Now `i18n` will be an [Jed](http://slexaxton.github.io/Jed/) instance.

`%s` will be replaced with the current choosed language. To choose language you can either specify
a `--jedify-lang` argument to browserify or use the `JEDIFY_LANG` enviroment variable. It defaults
to `en`.

Eg.

    $ browserify --jedify-lang nb_NO

## Install

    $ npm install jedify

## License

MIT
