var i18n = requirePo('./local/%s.po')

var _ = i18n.gettext.bind(i18n)

console.log(_('Hello World'))

console.log(i18n.ngettext('One result', 'Found %d results', 2))
