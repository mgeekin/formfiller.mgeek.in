main.append(gen("div", "chat", '', 'section'));
M = ['Well, I was annoyed by the repeated task of filling web forms and I searched for any automation solution like autofill extensions, etc.<br /> However. they are inefficient and do not work on restricted websites.',
    ' Therefore I tried to automate this form filling process. <br />Initially I made it for my\
    personal use.<br />    Later, I shared it with my friends and colleagues, and they liked it. <br />So I thought it\
    might be useful for others and save their time.',
    'Hi! I am <b>Dr. Prateek Raj Gautam</b>.',
    'I have earned my <b>Ph.D.</b> in 2021 from <b>Motilal Nehru National Institute of Technology at\
    Allahabad</b>,\
Prayagraj, India. under the supervision of <b>Dr. Arvind Kumar</b> (Associate Professor ECED,\
MNNIT)\
on the topic "<b><i>Energy-Efficient 2D and 3D Localization in Wireless Sensor Networks using Single Anchor\
        Node.</i></b>"',
    'I have around <b>4 years of pre-PhD teaching experience</b> as an <b>Assistant Professor</b> at\
        Allen\
        house\
        Institute of Technology and Naraina College of Engineering and Technology.',

    'I have received <b>M.Tech.</b> degree in electronics and communication engineering from\
    <b>Harcourt\
        Butler\
        Technological Institute</b> Kanpur, India, in 2011.',
    'My main research interests are in the energy-efficient scheme for wireless sensor networks,\
    image\
    processing, CDMA, IDMA, and brain wave mapping.',
    '        I have advanced experience with subject-related software like <b>MATLAB, Python, CST Studio\
    Suite,    LTspice.</b>',
    'I have sound skills at producing high-quality documents and illustrations in\
    <b>LaTeX/Tikz</b> and\
    2d and 3d drawing and animation software like <b>Inkscape, GIMP, and Blender</b>.',
    'I would like expand my research in the field of wireless networks and their application.\
    <i>Currently, I\
        am exploring optimization and machine learning and its applications in Wireless Sensor\
        Networks.</i>',

];


for (i = 0; i < M.length; i++) {
    addChatMessages(chat, M[i], i);
};

async function addChatMessages(chat, Mi, i) {
    console.log(Mi);
    setTimeout(() => {
        chat.append(gen('p', `p${i}`, "", 'chatbubble'));
        document.getElementById(`p${i}`).append(gen("span", "user", ""));
        document.getElementById(`p${i}`).append(gen("span", "message", Mi));
    }, 1000);

}


var contact = `                <p>
<h1 id='contact'>Contact</h1>
<h2>
    Research
</h2>
<ul id="research-links">
    <li><a href="https://www.researchgate.net/profile/Prateek-Raj-Gautam"
            target="_blank">Researchgate</a>
    </li>
    <li><a href="https://scholar.google.co.in/citations?user=slZHj6cAAAAJ&hl=en" target="_blank">Google
            scholar</a>
    </li>
    <li><a href="https://orcid.org/0000-0002-2889-4275" target="_blank">ORCID</a></li>
    <li><a href="https://publons.com/researcher/2100291/prateek-raj-gautam"
            target="_blank">Publons/ResearchID</a>
    </li>
    <li><a href="https://www.scopus.com/authid/detail.uri?authorId=57194277572"
            target="_blank">Scopus</a>
    </li>

</ul>
</p>

<p>
<h2>
    Social
</h2>
<ul id="social-links">
    <li><a href="https://t.me/prateekrajgautam" target="_blank">Telegram</a></li>
    <li><a href="https://www.linkedin.com/in/prateekrajgautam/" target="_blank">Linkedin</a></li>
    <li><a href="https://github.com/prateekrajgautam" target="_blank">Github</a></li>
    </li>

    <li><a
            href="mailto:prateekrajgautam@gmail.com?subject=From FormHelper website&body=Hello, Dear Dr. Prateek Raj Gautam">Gmail</a>
    </li>

</ul>
</p>`;

main.append(gen("div", "contact", contact, 'section'));