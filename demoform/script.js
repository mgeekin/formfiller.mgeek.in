
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
header.append(gen("p", "hint", "demo form to test working of FormHelper no data is saved here"))
body.append(main);
//body.append(footer);


//main.append(gen("H1", "Heading1", "Heading 1"));


//a.append(r)
var formfields = [
    {
        "heading": "Basic",
        "data": ['First name', 'Middle name', "Last name", 'Full name']
    },
    {
        "heading": "Contact",
        "data": ['Country code', 'Mobile', 'Email', "Address"]
    },
    {
        "heading": "Education",
        "data": ['degee', 'college', 'year']
    },
    {
        "heading": "Publication 1",
        "data": ['Title', 'Journal', "Authors", "Year", "pages"]
    },
    {
        "heading": "Publication 2",
        "data": ['Title', 'Journal', "Authors", "Year", "pages"]
    },

    {
        "heading": "Publication 3",
        "data": ['Title', 'Journal', "Authors", "Year", "pages"]
    }
];


for (var i = 0; i < formfields.length; i++) {
    var heading = formfields[i].heading;
    var datafield = formfields[i].data;
    console.log(datafield)
    main.append(gen("div", `div${heading}`));

    document.getElementById(`div${heading}`).append(gen("h3", `heading${i}`, `${heading}`));
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


main.append(gen("div", "resetAll", "Reset All", "button"));
resetAll.addEventListener("click", cleaninput);

function cleaninput() {
    var a = document.querySelectorAll("input");
    for (i = 0; i < a.length; i++) {
        console.log(a[i].value);
        a[i].value = "";
    }
}


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