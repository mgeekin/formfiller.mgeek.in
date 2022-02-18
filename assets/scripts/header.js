header.append(gen("span", "title"));
title.append(gen("span", "logo", gen("img", 'sitelogo')));
title.append(gen("span", "siteheading"));
sitelogo.src = "/assets/img/logo.png";
sitelogo.alt = "";

siteheading.append(gen("span", "sitetitle", "Form Helper"));
siteheading.append(gen("span", "sitesubtitle", "Automation tool for filling forms and data entry"));

navLinksObj = [['Home', '/'], ['Download', '/#download'], ["Demo Form", "/demoform"], ["Author", "/author"], ["Contact", "/author/#contact"]];

document.getElementById("header").append(gen("nav", 'nav', gen("ul", 'navul')));
for (i = 0; i < navLinksObj.length; i++) {
    console.log(i);
    var navRow = navLinksObj[i];
    console.log(navRow[0]);
    // navlist.append("navRow[0]");
    navul.append(gen('li', `navli${i}`, gen("a", `navlia${i}`, `${navRow[0]}`)));
    document.getElementById(`navlia${i}`).href = navRow[1];
    // document.getElementById(`navli${i}`).innerHTML = `<a href="${navRow[1]}">${navRow[0]}</a>`;

};