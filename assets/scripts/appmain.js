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
appmain.append(header, main, footer);




