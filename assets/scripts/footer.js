footer.append(gen("span", "footlinks"));

footlinksdata = [['Home', '/'], ['Download', '#download'], ["Demo Form", "/demoform"], ["Author", "/author"], ["Contact", "#contact"]];

footer.append(gen("span", 'footlinks', gen("ul", 'footlist')));
for (i = 0; i < navLinksObj.length; i++) {
    console.log(i);
    var navRow = navLinksObj[i];
    console.log(navRow[0]);
    // navlist.append("navRow[0]");
    // footlinks.append(gen('li', `footli${i}`, gen("a", `footlia${i}`, `${navRow[0]}`)));
    document.getElementById(`footlia${i}`).href = navRow[1];
    // document.getElementById(`navli${i}`).innerHTML = `<a href="${navRow[1]}">${navRow[0]}</a>`;

};