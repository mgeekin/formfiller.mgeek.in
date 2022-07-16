//SiteDefaults
const site = {}
site.title = "FromHelper"
site.site_title = site.title
site.subtitle = "Automation tool for filling forms and data entry"
site.logo = '/assets/img/logo.png'
site.image = site.logo
site.favicon = '/assets/img/favicon.ico'
site.image = site.logo
site.description = `Speed up data entry and form filling process

One click to type one entry.
Reuse data stored in spreadsheet.
Save time and improves productive.
Make error free typecast and coding tutorial.`
site.url = `https://formhelper.mgeek.in/`

var s = site

//social links JSON or Js dict
const social = [
    { tag: 'a', id: 'fb', innerHTML: 'Facebook', href: "https://facebook.com/mGeek.in", target: "_blank", classList: 'sociallinks' },
    { tag: 'a', id: 'tg', innerHTML: 'Telegram', href: "https://t.me/mGeek", target: "_blank", classList: 'sociallinks' },
    { tag: 'a', id: 'git', innerHTML: 'Github', href: "https://github.com/mgeekin/formfiller.mgeek.in/issues", target: "_blank", classList: 'sociallinks' },
    { tag: 'a', id: 'mail', innerHTML: 'Email', href: `mailto:care@mgeek.in?subject=Related to GeneratorJs&body=From : ${window.location.href}`, target: "_blank", classList: 'sociallinks' }
]


window.site = site
window.social = social
