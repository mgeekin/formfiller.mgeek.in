header.append(gen("span", "headTitle"));
headTitle.append(gen("span", "appTitle", "Form Helper"));
headTitle.append(gen("span", "subTitle", "Automation tool for filling forms and data entry"));

navLinksObj = [['Home', '/'], ['Download', '/#download'], ["Demo Form", "/demoform"], ["Author", "/author"], ["Contact", "/author/#contact"]];
console.log(navLinksObj[1]);
document.getElementById("header").append(gen("span", 'navlink', gen("ul", 'navlist')));
for (i = 0; i < navLinksObj.length; i++) {
    console.log(i);
    var navRow = navLinksObj[i];
    console.log(navRow[0]);
    // navlist.append("navRow[0]");
    navlist.append(gen('li', `navli${i}`, gen("a", `navlia${i}`, `${navRow[0]}`)));
    document.getElementById(`navlia${i}`).href = navRow[1];
    // document.getElementById(`navli${i}`).innerHTML = `<a href="${navRow[1]}">${navRow[0]}</a>`;

};