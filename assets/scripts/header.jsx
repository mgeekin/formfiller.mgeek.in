function loadHeader() {
    append(header, gen("span", "title"));
    append(title, gen("span", "logo", gen("img", 'sitelogo', "", "", "/assets/img/logo.png")));
    append(title, gen("span", "siteheading"));
    sitelogo.width = 30;
    sitelogo.alt = "";

    append(siteheading, gen("span", "sitetitle", gen(a, 'homelink', "Form Helper", "", 'https://formhelper.mgeek.in')));
    append(siteheading, gen("span", "sitesubtitle", "Automation tool for filling forms and data entry"));

    navLinksObj = [
        ['Download', '/#download'],
        ["Demo Form", "/demoform"],
        ["Author", "/author"],
        ["Contact", "/author/#contact"]
    ];

    append(header, gen("nav", 'nav'));
    append(nav, gen('input', "navmenu", "", "check", {
        "type": "checkbox", "onclick": `()=>_{var a = document.getElementById('navmenu');
    var b = document.getElementById('navul');
    if (a.checked == true) {
        b.style.display = 'flex';
    }else if (navmenu.checked == false) {
        b.style.display = 'none';
    }}` }));
    // // navmenu.checked = true;
    // document.getElementById('navmenu').addEventListener("click", () => {

    //     // console.log('click');
    //     var a = document.getElementById('navmenu');
    //     var b = document.getElementById('navul');
    //     if (a.checked == true) {
    //         b.style.display = 'flex';
    //     }else if (navmenu.checked == false) {
    //         b.style.display = 'none';
    //     }
    // });

    append(nav, gen("label", 'navmenulabel', "", "", { 'for': 'navmenu' }));
    append(navmenulabel, [gen(span, '', '', 'ham1'), gen(span, '', '', 'ham2'), gen(span, '', '', 'ham3')]);


    append(nav, gen("ul", 'navul'))
    navLinksObj.forEach(navRow => {
        append(navul, gen('li', ``, gen("a", ``, navRow[0], "", navRow[1])));
    })



    navul.addEventListener('click', () => {
        // navmenu.checked = !navmenu.checked;
        var a = document.getElementById('navmenu');
        var b = document.getElementById('navul');
        // console.log(a)
        if (a.checked == true) {
            navmenu.checked = !navmenu.checked;
            // console.log(b)
            b.style.display = 'none';
            // console.log(b.style)
        }
    })


    $("#main")[0].addEventListener('click', () => {
        // navmenu.checked = !navmenu.checked;
        var a = document.getElementById('navmenu');
        var b = document.getElementById('navul');
        // console.log(a)
        if (a.checked == true) {
            navmenu.checked = !navmenu.checked;
            // console.log(b)
            b.style.display = 'none';
            // console.log(b.style)
        }
    })
};

loadHeader();

document.title = 'formhelper@mgeek.in'