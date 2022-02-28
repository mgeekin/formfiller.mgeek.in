const div = 'div';
const p = 'p';
const span = 'span';
const img = 'img';
const h1 = 'h1';
const h2 = 'h2';
const h3 = 'h3'
const table = 'table';
const thead = 'thead';
const tbody = 'tbody';
const tr = 'tr';
const td = 'td';
const button = 'button';


function gen(elementtype, idin, htmlin, classin) {
    var element = document.createElement(elementtype);
    if (idin != undefined && idin != "") {
        element.id = idin;
    }
    if (htmlin != undefined) {
        if (htmlin.nodeName === undefined) {
            console.log(typeof (htmlin))
            if (typeof (htmlin) != "object") {
                element.innerHTML = htmlin;
                element.value = htmlin;
            }
            if (typeof (htmlin) == "object") {
                element.innerHTML = htmlin;
                element.value = htmlin;
            }
        };
        if (htmlin.nodeName != undefined) {
            element.append(htmlin);
            console.log(htmlin);
            console.log(htmlin.nodeName);
        };
    }

    if (classin != undefined && classin != "") {
        // element.classList.add(classin);
        element.classList += classin.replace(',', ' ').replace(', ', ' ');
    }
    return element;
};

function loadApp() {

    const appmain = document.getElementById('app');

    const header = gen(div, "header");
    const main = gen(div, "main", "", "maincontainer");
    const footer = gen(div, "footer");
    appmain.innerHTML = "";
    header.innerHTML = "";
    main.innerHTML = "";
    footer.innerHTML = "";
    appmain.append(header, main, footer);
    // loadHeader();
    // loadFooter();
}
loadApp()
ListOfScripts = [
    `/assets/scripts/header.js`,
    `/assets/scripts/footer.js`,
    `./script.js`,
    `https://unpkg.com/htmx.org@1.7.0`,
    // `https://cdn.tailwindcss.com`,
]

function LoadScripts(srcList) {
    for (i = 0; i < srcList.length; i++) {
        var s = document.createElement("script");  // create a script DOM node
        s.type = 'text/javascript'
        s.src = srcList[i];  // set its src to the provided URL

        // script.crossorigin = "anonymous";
        // script.integrity = "sha384-EzBXYPt0/T6gxNp0nuPtLkmRpmDBbjg6WmCUZRLXBBwYYmwAUxzlSGej0ARHX0Bo";
        document.head.appendChild(s);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
    }

}
// dynamicallyLoadScript(HTMXURL);
LoadScripts(ListOfScripts);




//Load Styles

ListOfStyles = [
    `./assets/styles/tailwinds.css`,
    `/assets/styles/sitestyle.css`,
    `./pagestyle.css`
]

function LoadStyles(srcList) {
    for (i = 0; i < srcList.length; i++) {
        var s = document.createElement("link");  // create a script DOM node
        s.rel = 'stylesheet';
        // s.type = 'text/javascript';
        s.href = srcList[i];  // set its src to the provided URL

        // script.crossorigin = "anonymous";
        // script.integrity = "sha384-EzBXYPt0/T6gxNp0nuPtLkmRpmDBbjg6WmCUZRLXBBwYYmwAUxzlSGej0ARHX0Bo";
        document.head.appendChild(s);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
    }
}
// dynamicallyLoadScript(HTMXURL);
LoadStyles(ListOfStyles);