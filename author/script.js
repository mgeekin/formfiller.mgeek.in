main.append(gen("div", "chatwindow", "", 'section'));
chatwindow.append(gen('div', 'chatheader', gen(img, 'dp')), gen(div, 'chat'))
chatwindow.append(gen(div, 'mailform', gen(textarea, 'chatinput')));
dp.src = '/assets/img/author.jpg';
dp.alt = ''
chatinput.focus;
chatinput.setActive;
chatinput.select();
// chatinput.type = 'textarea';
chatinput.cols = 25;
chatinput.rows = 4;


mailform.append(gen(button, 'sendbutton', 'send'))
sendbutton.addEventListener('click', sendEmailFunction)

function sendEmailFunction() {
    var userMessage = chatinput.value;
    var email = gen(a, email);
    email.href = `mailto:formhelper@mgeek.in?body=${userMessage}&subject=Formhelper Author Page`;
    email.click();
}
// sendbutton.style.background = '#fff'
// chatinput.style.float = 'right'
// chatinput.style.width = '40em'
// chatinput.style.height = '5em'

// mailform.style.display = 'flex';
// chatinput.style.width = '100%';
// mailform.append(gen(button, 'mailbutton', 'Send Email'));



M = [
    'Well, I was annoyed by the repeated task of filling web forms, so, I try different automation solution like autofill or form filling, browser extensions, etc.<br/>However, they are inefficient and do not work on restricted websites.',
    ' Therefore, I tried to automate this form filling process. ',
    'Initially, I made it for my\
    personal use. Then, I shared it with my friends and colleagues, and they liked it. So I thought it\
    might be useful for others and save their time.',
    'Hi! I am <b>Dr. Prateek Raj Gautam</b>.',
    'I have earned my <b>Ph.D.</b> in 2021 from <b>Motilal Nehru National Institute of Technology at\
    Allahabad</b>, \
Prayagraj, India. under the supervision of <b>Dr. Arvind Kumar</b> (Associate Professor ECED,\
MNNIT) \
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
    2d and 3d drawing and animation software like <b>Inkscape, GIMP, and Blender</b>. </br> I have strong interest in Web development with technologies like <b>HTML, CSS, JS, Wordpress, Django, jekyll</b>',
    'I would like expand my research in the field of wireless networks and their application.\
    <i>Currently, I\
        am exploring optimization and machine learning and its applications in Wireless Sensor\
        Networks.</i>',
];


i = 0;
function addChatBubble(i) {
    // console.log(`addingBubble ${i}`)
    if (i < M.length) {
        chat.append(gen('p', `p${i}`, "", 'chatbubble'));
        setTimeout(addChatMessages, 1000, chat, M[i], i, 0);
        chat.scrollTop = chat.scrollTopMax
    };
}


function addChatMessages(chat, Mi, i, j) {
    chat.scrollTop = chat.scrollTopMax
    // console.log(j);
    // console.log(Mi.length);
    if (j == 0) {
        // var cursor = gen(span, 'cursor', '|', 'cursor');
        document.getElementById(`p${i}`).append(gen("span", "user", ""));
        document.getElementById(`p${i}`).append(gen("span", `message${i}`));
        // document.getElementById(`p${i}`).scrollIntoView(false);
        chat.scrollTop = chat.scrollTopMax
        // document.getElementById(`chat`).scrollIntoView(false);
    }
    if (j <= Mi.length) {
        if (Mi[j] == ' ' || j == Mi.length) {
            document.getElementById(`message${i}`).innerHTML = Mi.slice(0, j);
            if (j != Mi.length) {
                document.getElementById(`message${i}`).append(gen(span, 'cursor', '', 'cursor'));
            }
        }

        // cursor.remove();




        j = j + 1;
        setTimeout(addChatMessages, 10, chat, Mi, i, j);
        if (j == Mi.length) {
            // document.getElementById(`chat`).scrollIntoView(false);
            // sendbutton.scrollIntoView(false);
            // () => {
            var offset = chat.parentElement.getBoundingClientRect().height;
            var elemTop = sendbutton.getBoundingClientRect().height;
            var pos = offset - 900;
            console.log(pos);
            // window.scrollTo({ top: pos, behavior: 'smooth' })
            // }
            // cursor.remove();
            cursor.style.display = 'none';
            // document.getElementById(`p${i}`).scrollIntoView(false);
            chat.scrollTop = chat.scrollTopMax
            i = i + 1;

            setTimeout(addChatBubble, 50, i);
        }
    }
}


setTimeout(addChatBubble, 500, 0);



// flex-grow: 0;
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

main.append(gen("div", "contact", contact, ''));
