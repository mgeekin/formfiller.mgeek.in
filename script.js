
t1 = window.setTimeout(function () {
    var redirectUrl = "https://www.researchgate.net/profile/Prateek-Raj-Gautam";
    //var redirectUrl = "https://formhelper.mgeek.in";
    //window.location.href = redirectUrl;
}, 10000);

var releaseUrl = "/assets/release/Release.zip";
var ytIdentifier = 'AU6rH9O8WfA'
var youtubeCode = `<div class="ytContainer"><iframe class="ytVideo" src="https://www.youtube.com/embed/${ytIdentifier}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
//var youtubeComments = `<div class="ytContainer"><iframe class="ytVideo" src="http://gdata.youtube.com/feeds/api/videos/${ytIdentifier}/comments"></iframe></div>`
var gifSrc = '/assets/img/preview.webm';
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
header.append(gen("h4", "subTitle", "Automation tool for filling forms and data entry"));
const main = gen("div", "main");
const footer = gen("div", "footer", `<i>by Dr. Prateek Raj Gautam</i>`);

body.append(header);
//header.append(gen("p", "hint", "demo form to test working of FormHelper no data is saved here"))
body.append(main);
//body.append(footer);

var og = [
    ['title', 'Automation tool for filling forms and data entry'],
    ['description', 'It provides a way to fill forms in less time.    1. Open your form where data needs to be filled'],
    ['type', 'website'],
    ['image', '/assets/img/preview.webp']
];
head = document.querySelector("head");
for (i = 0; i < og.length; i++) {
    var metaid = `metaid${og[i][0]}`;
    console.log(metaid)
    head.append(gen("meta", `${metaid}`));
    document.getElementById(`${metaid}`).name = `og:${og[i][0]}`;
    document.getElementById(`${metaid}`).property = `og:${og[i][0]}`;
    document.getElementById(`${metaid}`).content = `${og[i][1]}`;
}


//instructions
main.append(gen("div", "instructions", gen("h2", "", "How to use"), "section"))
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
main.append(gen("div", "screenshots", gen("h2", "", "Screenshots"), "section"))
//GIF
screenshots.append(gen("div", "screenshotGif"));
screenshotGif.append(gen("img", "gif", "", 'screehshotgif'));
gif.alt = "";
gif.src = gifSrc;
//IMG
screenshots.append(gen("div", "screenshotScroll"));
screenshotURL = [
    "https://formhelper.mgeek.in/assets/img/screenshots/01.webp",
    "https://formhelper.mgeek.in/assets/img/screenshots/02.webp",
    "https://formhelper.mgeek.in/assets/img/screenshots/03.webp",
    "https://formhelper.mgeek.in/assets/img/screenshots/04.webp",
    "https://formhelper.mgeek.in/assets/img/screenshots/05.webp",
    "https://formhelper.mgeek.in/assets/img/screenshots/06.webp"
]
for (i = 0; i < screenshotURL.length; i++) {
    screenshotScroll.append(gen("div", "", gen("img", `screenimg${i}`, `${screenshotURL[i]}`, 'screehshotimg'), "screenshotdiv"));
    document.getElementById(`screenimg${i}`).src = `${screenshotURL[i]}`;
}
//addButton("TEMP", main);

//download
main.append(gen("div", "download", "", "section"));
download.append(gen("h2", "", "Download and Run"));
download.append(gen("a", "dlbtn", "click here to start download", "button"));
dlbtn.href = releaseUrl;
dlbtn.download = "FormHelper.mgeek.in.zip"
download.append(gen("a", "demoForm", "Demo web form to test working with app", "button"))
demoForm.href = "demoform/"
demoForm.style.marginLeft = "20px";
download.append(gen("p", "", "zip file contains Demo files you can edit with your data"))


//youtube
main.append(gen("div", "yt", gen("h2", "", "Video Tutorial on YouTube"), "section"))
yt.append(gen("ytcode", "ytcode"));
ytcode.innerHTML = youtubeCode;
//yt.append(gen("ytcode", "ytcomment"));
//ytcomment.innerHTML = youtubeComments;








