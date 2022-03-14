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
main.append(gen("div", "hero", gen("h1", "", "Speed up data entry and form filling process"), "section"))
hero.append(gen(p, '', 'One click to type one entry.<br />\
 Reuse data stored in spreadsheet.<br/> \
 Save time and improves productive.<br/> \
 Make error free typecast and coding tutorial.'))
hero.append(gen(span, 'getButton', 'Get form helper', 'button'))
getButton.addEventListener('click', () => { download.scrollIntoView({ block: 'center', behavior: 'smooth' }) })

hero.append(gen(span, 'YTButton', 'How To Use', 'button-blank'))
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
main.append(gen("div", "screenshots", gen("h2", "", "Screenshots"), "section"))
//GIF


screenshots.append(gen("div", "screenshotGif"));
screenshotGif.innerHTML = webMvideoElement;
//gif.alt = "";
//gif.type = "video/webm";
//gif.src = gifSrc;


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
download.append(gen("a", "dlbtnWIN", "Download (Windows)", "button"));
dlbtnWIN.href = releaseUrlWIN;
dlbtnWIN.download = "FormHelper.mgeek.in_WIN.zip"
download.append(gen("a", "dlbtnLINUX", "Download (Linux)", "button"));
dlbtnLINUX.href = releaseUrlLINUX;
dlbtnLINUX.download = "FormHelper.mgeek.in_LINUX.zip"
download.append(gen("a", "demoForm", "Demo form", "button-blank"))
demoForm.href = "demoform/"
// demoForm.style.marginLeft = "20px";
download.append(gen("p", "", "zip file contains Demo files you can edit with your data"))



//How to Use
//instructions

main.append(gen("div", "howblock", gen(h2, '', "How to use")))
howblock.append(gen("div", "howToUse"));
howToUse.append(gen("div", "instructions", gen("h3", "", "Steps")))
instructions.append(gen("ol", "InstList"));
list = [
    "Open your form where data needs to be filled.",
    "Press the align button to move form window and formhelper in side by side.",
    "Load your data file (*.xlsx).",
    "Select the type area of form then click on button to fill it with data.",
    "<i>Your data is not stored anywhere.</i>",
    '<i>* App requires internet to check licence information at the start and when using "Download BiBTeX from DOI" function.</i>',
]


function* typ() {
    while (true) {
        i = InstList.childNodes.length;
        InstList.append(gen("li", `instulli${i}`, "", 'p1 m1'));
        typeAnimate(`instulli${i}`, `${list[i]}`)
        // i = i + 1
        yield i
    }
}
let A = typ()
i = 0
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > howblock.scrollHeight) {
        if (InstList.childNodes.length < list.length) {
            A.next();
        }
    }
});







//youtube
howToUse.append(gen("div", "yt", gen("h3", "", "Video Tutorial on YouTube")))
yt.append(gen("ytcode", "ytcode"));
ytcode.innerHTML = youtubeCode;
//yt.append(gen("ytcode", "ytcomment"));
//ytcomment.innerHTML = youtubeComments;

/* main.append(gen("div", "telegrampoll", gen("h2", "", "Feedback"), "section"))
telegrampoll.append(gen("p", "poll", TPoll));
 */




//feedback
main.append(gen("div", "feedback", "", "section"));
feedback.append(gen("h2", "", "Feedback and Report Issue"));
feedback.append(gen("p", '', "Plese send Feedback on Youtube and Issue on Github"));
feedback.append(gen("a", "ytComment", "Feedback", "button"));
feedback.append(gen("a", "gitIssue", "Report Issue", "button"));
ytComment.href = youtubeUrl;
ytComment.target = "_blank";
gitIssue.href = GithubIssueUrl;
gitIssue.target = "_blank";
// feedback.append(gen("a", "demoForm", "Demo web form to test working with app", "button"))


// LoadScripts([`/assets/scripts/space.js`])
LoadScripts([`/assets/scripts/spacegame.js`])