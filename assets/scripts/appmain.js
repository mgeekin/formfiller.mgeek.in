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
function LoadHTML() {
    var script = document.createElement("script");  // create a script DOM node
    script.src = "https://unpkg.com/htmx.org@1.7.0";  // set its src to the provided URL
    // script.crossorigin = "anonymous";
    // script.integrity = "sha384-EzBXYPt0/T6gxNp0nuPtLkmRpmDBbjg6WmCUZRLXBBwYYmwAUxzlSGej0ARHX0Bo";
    document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)

}
// dynamicallyLoadScript(HTMXURL);
LoadHTML()

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
        element.classList.add(classin);
    }
    return element;
};


/* document.body.innerHTML = '';
document.body.append(gen(div, "app", "", "app")); */

const appmain = document.getElementById('app');

const header = gen(div, "header");
const main = gen(div, "main", "", "container");
const footer = gen(div, "footer");
appmain.innerHTML = "";
header.innerHTML = "";
main.innerHTML = "";
footer.innerHTML = "";
appmain.append(header, main, footer);






// const HTMXURL = `https://unpkg.com/htmx.org@1.7.0`;
// const THMXSecureURL = `    <script src="https://unpkg.com/htmx.org@1.7.0" integrity="sha384-EzBXYPt0/T6gxNp0nuPtLkmRpmDBbjg6WmCUZRLXBBwYYmwAUxzlSGej0ARHX0Bo" ></script>`;



/* main.innerHTML = `<button hx-get="/author/"
hx-trigger="click"
hx-target="#main"
hx-swap="outerHTML">
Click Me!
</button>`; */

/* main.append(gen(div, "", gen(button, 'htmxbtn', 'author')));
htmxbtn.setAttribute('hx-post', '/author/');
htmxbtn.setAttribute('hx-swap', 'outerHTML');
// htmxbtn.`hx-swap` = "outerHTML"; */