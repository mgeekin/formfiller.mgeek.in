/* 
t1 = window.setTimeout(function () {
    var redirectUrl = "https://www.researchgate.net/profile/Prateek-Raj-Gautam";
    //var redirectUrl = "https://formhelper.mgeek.in";
    window.location.href = redirectUrl;
}, 10000); */


function gen(elementtype, idin, htmlin, classin) {
    var element = document.createElement(elementtype);
    if (idin != undefined) {
        element.id = idin;
    }
    if (htmlin != undefined) {
        if (htmlin.nodeName === undefined) {
            element.innerHTML = htmlin;
            element.value = htmlin;
        };
        if (htmlin.nodeName != undefined) {
            element.append(htmlin);
            console.log(htmlin);
            console.log(htmlin.nodeName);
        };
    }

    if (classin != undefined) {
        element.classList.add(classin);
    }
    return element;
};

const body = document.querySelector("app");
const header = gen("div", "header");
header.append(gen("h2", "appTitle", "Form Helper"));
const main = gen("div", "main");
const footer = gen("div", "footer", `<i>by Dr. Prateek Raj Gautam</i>`);

body.append(header);
//header.append(gen("p", "hint", "demo form to test working of FormHelper no data is saved here"))
body.append(main);
//body.append(footer);


//main.append(gen("H1", "Heading1", "Heading 1"));


//a.append(r)
var formfields = [
    {
        "heading": "About Dr. Prateek Raj Gautam",
        "data": ["Some other time"]
    }
];


for (var i = 0; i < formfields.length; i++) {
    var heading = formfields[i].heading;
    var datafield = formfields[i].data;
    console.log(datafield)
    main.append(gen("div", `div${heading}`));

    document.getElementById(`div${heading}`).append(gen("h1", `heading${i}`, `${heading}`));
    document.getElementById(`div${heading}`).append(gen("table", `table${i}`));
    for (var j = 0; j < datafield.length; j++) {
        var dataentry = datafield[j];
        console.log(dataentry);
        var row = gen("tr", `formrow${i}${j}`, "", "row");
        var ltext = gen("td", `formltd${i}${j}`, dataentry, "tdl");
        var rinput = gen("td", `formrtd${i}${j} `, gen("input", `datafield[j]`, "", "input"));
        //document.getElementById(`$forminput${i} `).value = `$forminput${i} `;
        document.getElementById(`table${i}`).append(row);
        row.append(ltext, rinput);
    }
    //document.getElementById(`lia${ i } `).href = "/";
};





//addButton("TEMP", main);

function addButton(text, target) {
    var button = document.createElement("div");
    button.classList.add("typebutton");
    button.innerText = text;
    button.onclick = function () {
        console.log(this.innerText);
        eel.typeit(this.innerText, 0);
    };
    target.append(button);

}


var elementsType = ["p", "div", "span", "img"];
for (i = 0; i < elementsType.length; i++) {
    console.log(`${elementsType[i]}`)
    // var `${elementsType[i]}` = `${elementsType[i]}`;
}

var chat = document.getElementById('chat');
var msg = [
    'Hi! I am Dr. Prateek Raj Gautam. ',
    'I have earned my Ph.D.in 2021 from Motilal Nehru National Institute of Technology at Allahabad, Prayagraj, India.under the supervision of Dr.Arvind Kumar(Associate Professor ECED, MNNIT) on the topic "Energy-Efficient 2D and 3D Localization in Wireless Sensor Networks using Single Anchor Node.'
];


async function addChatMessages(chat, msg) {
    console.log("addChatMessages(chat, msg)")
    for await (i of msg) {
        setTimeout(function () {
            console.log(i);
            chat.append(gen("p", `p${i}`, "hi", 'p1'));
            var pElement = document.getElementById(`p${i}`);
            pElement.innerHTML = "";
            typeAnimate(pElement, msg[i]);
        }, 100);
    };

};

async function typeAnimate(pid, text) {
    console.log("typeAnimate")
    console.log(pid)
    setTimeout(() => {
        for (i in text) {
            insertLetter(pid, text[i])
        }
    }, 100);
};

async function insertLetter(pid, text) {
    setTimeout(async () => {
        console.log(text)
        pid.innerHTML += text;
    }, 1000);

}
addChatMessages(chat, msg);