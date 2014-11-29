var i18n = requirePo('./local/%s.po')

var _ = i18n.gettext.bind(i18n)

console.log(_('Hello World'))
