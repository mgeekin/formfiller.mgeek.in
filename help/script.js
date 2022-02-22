
main.append(gen('section', 'sec', "", 'section'));
sec.append(gen("H1", "Heading1", "Redirecting to Youtube Instructions"));
sec.append(gen('a', 'yt', 'https://www.youtube.com/watch?v=AU6rH9O8WfA'));
yt.href = 'https://www.youtube.com/watch?v=AU6rH9O8WfA';

//a.append(r)
var formfields = [
    {
        "heading": "Under Construction",
        "data": ["Feedback"]
    }
];

/* 
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
 */






t1 = window.setTimeout(function () {
    //var redirectUrl = "https://www.researchgate.net/profile/Prateek-Raj-Gautam";
    var redirectUrl = "https://www.youtube.com/watch?v=AU6rH9O8WfA";
    window.location.href = redirectUrl;
}, 30000);

