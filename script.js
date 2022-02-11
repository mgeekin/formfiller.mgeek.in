
t1 = window.setTimeout(function () {
    var redirectUrl = "https://www.researchgate.net/profile/Prateek-Raj-Gautam";
    //var redirectUrl = "https://formhelper.mgeek.in";
    //window.location.href = redirectUrl;
}, 10000);

var releaseUrl = "/assets/release/Release.zip";
var youtubeCode = '<div class="ytContainer"><iframe class="ytVideo" src="https://www.youtube.com/embed/AU6rH9O8WfA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

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


function gennew(elementtype, idin, htmlin, classin) {
    var elementArray = document.createElement("path");
    if (typeof (htmlin) == "object") {
        console.log(htmlin.length)
        for (i = 0; i < htmlin.length; i++) {
            var element = document.createElement(elementtype);
            if (idin != undefined && idin != "") {
                element.id = idin;
            }
            if (htmlin != undefined) {
                if (htmlin.nodeName === undefined) {
                    console.log(typeof (htmlin))
                    element.innerHTML = htmlin[i];
                    element.value = htmlin[i];
                };
                if (htmlin.nodeName != undefined) {
                    element.append(htmlin[i]);
                    console.log(htmlin);
                    console.log(htmlin.nodeName);
                };
            }

            if (classin != undefined && classin != "") {
                element.classList.add(classin);
            }
            elementArray.append(element);
        }
        elementArray.outerHTML = ""
        return elementArray;
    }
}

const body = document.querySelector("app");
const header = gen("div", "header");
header.append(gen("h1", "appTitle", "Form Helper"));
header.append(gen("h4", "subTitle", "A simple excel automation tool for form filling and data entry"));
const main = gen("div", "main");
const footer = gen("div", "footer", `<i>by Dr. Prateek Raj Gautam</i>`);

body.append(header);
//header.append(gen("p", "hint", "demo form to test working of FormHelper no data is saved here"))
body.append(main);
//body.append(footer);

var og = [
    ['title', 'Faster way to fill online forms with excel'],
    ['description', ''],
    ['type', 'website'],
    ['image', '/assets/img/webpreview.png']
];
head = document.querySelector("head");
for (i = 0; i < og.length; i++) {
    var metaid = `metaid${og[i][0]}`;
    console.log(metaid)
    head.append(gen("meta", `${metaid}`));
    document.getElementById(`${metaid}`).name = `op:${og[i][0]}`;
    document.getElementById(`${metaid}`).content = `${og[i][1]}`;
}
//youtube
main.append(gen("div", "yt", gen("h2", "", "Video Tutorial on YouTube")))
yt.append(gen("ytcode", "ytcode"));
ytcode.innerHTML = youtubeCode;

//instructions
main.append(gen("div", "instructions", gen("h2", "", "How to use")))
instructions.append(gen("ol", "InstList"));
list = [
    "Open your form where data needs to be filled",
    "press the align button to move form window and formhelper in side by side",
    "Load your data file (*.xlsx) in form helper",
    "    Select the type area of form then click click on button to fill it with data."
]
for (i = 0; i < list.length; i++) {
    InstList.append(gen("li", ``, `${i + 1}. ${list[i]}`));
}
//screenshot
main.append(gen("div", "screenshots", gen("h2", "", "Screenshots")))
screenshots.append(gen("div", "screenshotScroll"));
screenshotURL = [
    "https://formhelper.mgeek.in/assets/img/screenshots/01.png",
    "https://formhelper.mgeek.in/assets/img/screenshots/02.png",
    "https://formhelper.mgeek.in/assets/img/screenshots/03.png",
    "https://formhelper.mgeek.in/assets/img/screenshots/04.png",
    "https://formhelper.mgeek.in/assets/img/screenshots/05.png"
]
for (i = 0; i < screenshotURL.length; i++) {
    screenshotScroll.append(gen("div", "", gen("img", `screenimg${i}`, `${screenshotURL[i]}`, 'screehshotimg'), "screenshotdiv"));
    document.getElementById(`screenimg${i}`).src = `${screenshotURL[i]}`;
}
//addButton("TEMP", main);

//download

main.append(gen("div", "download"));
download.append(gen("h2", "", "Download and Run"));
download.append(gen("a", "dlbtn", "click here to start download", "button"));
dlbtn.href = releaseUrl;
dlbtn.download = "FormHelper.mgeek.in.zip"
download.append(gen("a", "demoForm", "Demo web form to text working with app", "button"))
demoForm.href = "demoform/"
demoForm.style.marginLeft = "20px";
download.append(gen("p", "", "zip file contains Demo files you can edit with your data"))











