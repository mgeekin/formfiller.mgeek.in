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
var appmain = document.getElementById('app');
var header = gen("div", "header");
var main = gen("div", "main");
var footer = gen("div", "footer", gen("div", 'copyright', gen("p", "", `&copy 2022 <a href='https://mgeek.in'>mGeek.in</a> Designed by <i>Dr. Prateek Raj Gautam</i>`)));
appmain.append(header, main, footer);




