function loadHeader() {
    header.innerHTML = '';
    header.append(gen("span", "title"));
    title.append(gen("span", "logo", gen("img", 'sitelogo')));
    title.append(gen("span", "siteheading"));
    sitelogo.src = "/assets/img/logo.png";
    sitelogo.width = 30;
    sitelogo.alt = "";

    siteheading.append(gen("span", "sitetitle", gen(a, 'homelink', "Form Helper")));
    homelink.href = 'https://formhelper.mgeek.in';
    siteheading.append(gen("span", "sitesubtitle", "Automation tool for filling forms and data entry"));

    navLinksObj = [
        ['Download', '/#download'],
        ["Demo Form", "/demoform"],
        ["Author", "/author"],
        ["Contact", "/author/#contact"]
    ];

    document.getElementById("header").append(gen("nav", 'nav', gen("ul", 'navul')));
    nav.append(gen('input', "navmenu", "check"));
    navmenu.type = "checkbox";
    // navmenu.checked = true;
    document.getElementById('navmenu').addEventListener("click", () => {

        // console.log('click');
        var a = document.getElementById('navmenu');
        var b = document.getElementById('navul');
        // console.log(a)
        if (a.checked == true) {
            // console.log(b)
            b.style.display = 'flex';
            // console.log(b.style)
        } if (navmenu.checked == false) {
            // console.log(b)
            b.style.display = 'none';

            // console.log(b.style)
        }
    });

    nav.append(gen("label", 'navmenulabel'));
    navmenulabel.setAttribute('for', 'navmenu');
    navmenulabel.append(gen(span, '', '', 'ham1'), gen(span, '', '', 'ham2'), gen(span, '', '', 'ham3'));
    // navmenulabel.attribute.for = "hi";
    // navicon.for = "navmenu";
    for (i = 0; i < navLinksObj.length; i++) {
        // console.log(i);
        var navRow = navLinksObj[i];
        // console.log(navRow[0]);
        // navlist.append("navRow[0]");
        navul.append(gen('li', `navli${i}`, gen("a", `navlia${i}`, `${navRow[0]}`)));
        document.getElementById(`navlia${i}`).href = navRow[1];
        // document.getElementById(`navli${i}`).innerHTML = `<a href="${navRow[1]}">${navRow[0]}</a>`;

    };



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


    main.addEventListener('click', () => {
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