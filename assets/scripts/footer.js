function loadFooter() {
    var footerStyle = `.footer {
    display: flex;
    min-height: 3em;
    background: hsl(236, 38%, 15%);
    width: 100%;
    z-index: 2;
    flex-direction: column;
    // padding-inline: clamp(1em, 10vw, 15%);
    // padding-top:5em;
   a {
        color: $footcolor;
    }
}
`
    loadscss(footerStyle, "footer")
    append(footer, gen(div, "contact", gen(h1, "", "Contact", ''), 'container,section'), 'over')
    append(contact, gen(p, "", social))
    console.info('footer loaded')
};


loadFooter();