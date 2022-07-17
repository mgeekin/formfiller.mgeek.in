/* 
t1 = window.setTimeout(function () {
    var redirectUrl = "https://www.researchgate.net/profile/Prateek-Raj-Gautam";
    //var redirectUrl = "https://formhelper.mgeek.in";
    //window.location.href = redirectUrl;
}, 10000); */

const releaseUrlWIN = "/assets/release/Release.zip";
const releaseUrlLINUX = "/assets/release/ReleaseLinux.zip";
const GithubIssueUrl = "https://github.com/mgeekin/formfiller.mgeek.in/issues";
const ytIdentifier = 'AU6rH9O8WfA'
const youtubeCode = `<div class="ytContainer"><iframe class="ytVideo" src="https://www.youtube.com/embed/${ytIdentifier}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
const youtubeUrl = `https://www.youtube.com/watch?v=${ytIdentifier}`;
//var youtubeComments = `<div class="ytContainer"><iframe class="ytVideo" src="http://gdata.youtube.com/feeds/api/videos/${ytIdentifier}/comments"></iframe></div>`
const gifSrc = '/assets/img/preview.gif';
const webmSrc = '/assets/img/preview.webm';
const webMvideoElement = `<video autoplay loop muted playsinline>
<source src="${webmSrc}" type="video/webm">
</video>`;


const TPoll = `<script async src="https://telegram.org/js/telegram-widget.js?15" data-telegram-post="FreeFormHelper/4" data-width="100%"></script>`;
const og = [
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
append(main, gen("section", "hero", gen(h1, "", "Speed up data entry and form filling process"), "section,container,container"), "over")
append(hero, gen(p, '', 'One click to type one entry.<br />\
 Reuse data stored in spreadsheet.<br/> \
 Save time and improves productive.<br/> \
 Make error free typecast and coding tutorial.'))
append(hero, gen(a, 'getButton', 'Get form helper', 'button', "#download"))
getButton.addEventListener('click', () => { download.scrollIntoView({ block: 'center', behavior: 'smooth' }) })

append(hero, gen(a, 'YTButton', 'How To Use', 'button-blank', "#howblock"))
YTButton.addEventListener('click', () => {
    var offset = -80;
    var elemTop = howblock.getBoundingClientRect().top;
    var pos = elemTop + offset;
    window.scrollTo({ top: pos, behavior: 'smooth' })
})
// hero.append(gen(div, 'gameInst', ''))
// gameInst.append(gen(h3, '', 'And while you are here roam around by pressing'), gen(div, 'keylist'))
// keylist.append(gen(span, '', 'w', 'gamekey'), gen(span, '', 's', 'gamekey'), gen(span, '', 'a', 'gamekey'), gen(span, '', 'd', 'gamekey'))














//screenshot
append(main, gen("section", "screenshots", gen("h1", "", "Screenshots"), "section,container"))
//GIF


screenshots.append(gen("div", "screenshotGif"));
screenshotGif.innerHTML = webMvideoElement;
//gif.alt = "";
//gif.type = "video/webm";
//gif.src = gifSrc;


//IMG
append(screenshots, gen("div", "screenshotScroll"));
screenshotURL = [
    "https://formhelper.mgeek.in/assets/img/screenshots/01.webp",
    "https://formhelper.mgeek.in/assets/img/screenshots/02.webp",
    "https://formhelper.mgeek.in/assets/img/screenshots/03.webp",
    "https://formhelper.mgeek.in/assets/img/screenshots/04.webp",
    "https://formhelper.mgeek.in/assets/img/screenshots/05.webp",
    "https://formhelper.mgeek.in/assets/img/screenshots/06.webp"
]
for (i = 0; i < screenshotURL.length; i++) {
    append(screenshotScroll, gen("div", "", gen("img", `screenimg${i}`, `${screenshotURL[i]}`, 'screehshotimg'), "screenshotdiv"));
    document.getElementById(`screenimg${i}`).src = `${screenshotURL[i]}`;
}
//addButton("TEMP", main);

//download
append(main, gen("section", "download", "", "section,container"));
append(download, gen("h1", "", "Download and Run"));
append(download, gen("a", "dlbtnWIN", "Download (Windows)", "button"));
dlbtnWIN.href = releaseUrlWIN;
dlbtnWIN.download = "FormHelper.mgeek.in_WIN.zip"
append(download, gen("a", "dlbtnLINUX", "Download (Linux)", "button"));
dlbtnLINUX.href = releaseUrlLINUX;
dlbtnLINUX.download = "FormHelper.mgeek.in_LINUX.zip"
append(download, gen("a", "demoForm", "Demo form", "button-blank"))
demoForm.href = "demoform/"
// demoForm.style.marginLeft = "20px";
append(download, gen("p", "", "zip file contains Demo files you can edit with your data"))



//How to Use
//instructions

append(main, gen("section", "howblock", gen(h1, '', "How to use"), "section,container"))
append(howblock, gen("div", "howToUse"));
append(howToUse, gen("div", "instructions", gen("h3", "", "Steps")))
append(instructions, gen("ol", "InstList"));
list = [
    "Open your form in your web browser.",
    "Launch FormHelper application.",
    "Browse and load your data file (*.xlsx).",
    "Align form window and FormHelper app in split screen mode.",
    "Select the type area of form then click on button to fill it with data.",
    '<i>* App requires internet to check licence information at the start and when using "Download BiBTeX from DOI" function.</i>',
]




async function typ() {
    i = InstList.childNodes.length;
    InstList.append(gen("li", `instulli${i}`, "", 'p1 m1'));
    var res = await typeAnimate(`instulli${i}`, `${list[i]}`)
    if (InstList.childNodes.length < list.length) {
        await typ(res);
    }
}




window.addEventListener("scroll", startTyping)

async function startTyping() {

    var diff = window.scrollY - howblock.getBoundingClientRect().top - window.innerHeight
    if (diff > window.innerHeight / 2) {
        window.removeEventListener("scroll", startTyping)
        // if (InstList.childNodes.length < list.length) {
        res = await typ()
        // }
    }
}





//youtube
append(howToUse, gen("section", "yt", gen("h1", "", "Video Tutorial on YouTube"), "section,container"))
append(yt, gen("ytcode", "ytcode", youtubeCode));



//feedback
append(main, gen("section", "feedback", "", "section,container "));
append(feedback, gen("h2", "", "Feedback and Report Issue"));
append(feedback, gen("p", '', "Plese send Feedback on Youtube and Issue on Github"));
append(feedback, gen("a", "ytComment", "Feedback", "button"));
append(feedback, gen("a", "gitIssue", "Report Issue", "button"));
ytComment.href = youtubeUrl;
ytComment.target = "_blank";
gitIssue.href = GithubIssueUrl;
gitIssue.target = "_blank";

load("./pagestyle.css")
load("./assets/style/sitestyle.css")