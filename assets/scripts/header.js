// import { loadscss } from "./cdn/latest/generator";



function loadHeader() {

    append(header, "", "over");
    append(header, gen("span", "title"));
    append(title,
        [
            gen("span", "logo", gen("img", "sitelogo", "", "sitelogo", { "src": site.logo })),
            gen("span", "siteheading")
        ]
    );

    append(siteheading, gen("span", "sitetitle", gen(a, 'homelink', site.title, "", site.url)));

    append(siteheading, gen("span", "sitesubtitle", site.subtitle));

    append(header, gen(nav, 'appnav'));
    append(appnav, gen(input, "navmenu", "", "", { "type": "checkbox", "checked": "false" }));
    document.getElementById('navmenu').style.visibility = 'hidden'

    var ham = "&#9776"
    append(appnav, gen("label", 'navmenulabel', "", "", { "for": "navmenu", "title": "menu" }));
    append(navmenulabel, gen(span, '', '', 'ham1'))
    append(navmenulabel, gen(span, '', '', 'ham2'))
    append(navmenulabel, gen(span, '', '', 'ham3'));
    document.getElementById('navmenu').for = "navmenu";


    navLinksObj = [
        ['Home', '/#hero'],
        ["Demo Form", "/demoform"],
        ["Contact", "#contact"]
    ];


    // append(appnav, gen(ul, 'navul', "", "navul"))
    append(appnav, gen(ul, 'navul', "", "navul"))
    navLinksObj.forEach(navRow => {
        append(navul, gen(li, "", gen(a, "", navRow[0], "navullia", navRow[1]), "navulli", { "onclick": "toggleNavmenu()" }))



    });




    // addtoggletoitems()







};
function toggleNavmenu() {
    navmenu.checked = !(navmenu.checked)
}
loadHeader();








document.title = site.title

var headerStyle = `

.header {
    position: sticky;
    top: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: hsla(233, 76%, 6%,1);
    color:white;
    box-shadow: 0px 2px 3px hsla(var(--hueAscent,180),var(--satAscent,60%),var(--lightAscent,50%),.8);
    z-index: 20;
    padding: 2px;
    padding-left: 20px;
    padding-right: 20px;
    font-family:"Open Sans";

    
    &:hover {
        box-shadow: 0px 3px 4px hsl(var(--hueAscent,180),var(--satAscent,60%),var(--lightAscent,50%));
    }



    #logo{
    margin-block:auto;
        img {
            --logoWidth:40px;
            max-width:var(--logoWidth);
            transition: all 300ms ease-in;
            object-fit:contain;
            &:hover {
                padding:calc(inherit + 20px );
                margin:calc(inherit - 20px );

                filter: drop-shadow( -.1px -.1px .1px rgba(255, 255, 255, .8)) drop-shadow(1px 1px .1px rgba(0, 0, 0, .8));
                transform: scaleX(6) scaleY(6) translateX(50%) translateY(50%);
            }
        }
    }

    #title {
        display: flex;

        #siteheading {
            display: flex;
            flex-direction: column;
            align-items: start;


            #sitetitle {

                font-size: 25px;
                font-weight: 900;
                text-transform: uppercase;
                padding-left: 5px;
                padding-right: 15px;
                --ha:var(--hueAscent,200);
                --sa:var(--satAscent,100%);
                --la:var(--lightAscent,50%);
                color: hsl(var(--ha),var(--sa),var(--la));

            }

            #sitesubtitle {
                font-size: 12px;
                font-weight: 200;
                text-transform: capitalize;
                padding-left: 5px;
                padding-right: 15px;
            }
        }




    }

    nav {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding: 5px;

        #navul {
            margin: auto;
            display: grid;
    
            li {
    
                text-transform: capitalize;
                font-size: 14px;
                font-weight: 700;
                text-decoration: none;
              
    
                a{
                    padding-inline: 5px;
                    --ha:var(--hueAscent,200);
                    --sa:var(--satAscent,100%);
                    --la:var(--lightAscent,50%);
                    color: hsl(var(--ha),var(--sa),var(--la));
                    &:hover {
                        color: white;
                        background: hsl(var(--ha),var(--sa),var(--la));
                        padding:5px;
                    }
                }

    
    
            }
        }
    
    }

  


    #navmenulabel {

        position: relative;
        // top: 10px;
        // right: 5px;
        flex-direction: column;

        height: 20px;
        width: 25px;
        margin:  5px;
        margin-block:auto;
        transition: all 200ms ease-in-out;


        .ham1 {
            flex-grow: 0;
            position: relative;
            display: inline-block;
            background: #fff;
            height: 2px;
            width: 20px;
            border-radius: 1px;
            margin: 2px;
            box-shadow: 0px 6px 0px white, 0px -6px 0px white;
            transition: all 500ms ease;
        }

        &:hover {

            //
            .ham1 {
                box-shadow: 0px 6px 0px hsl(var(--hueAscent),var(--lightAscent),var(--lightAscent)), 0px -6px 0px hsl(var(--hueAscent),var(--lightAscent),var(--lightAscent));
            }
        }
    }








    #navmenu:not(:checked)+#navmenulabel>.ham1 {
        transform: rotateZ(45deg);
        box-shadow: -0px 0px 0px 1px hsl(var(--hueAscent),var(--lightAscent),var(--lightAscent));

        &:before {
            content: "";
            position: absolute;
            top: 0px;
            left: 0px;
            height: 3px;
            width: 20px;
            border-radius: 1px;
            transform: rotateZ(90deg);
            background: white;

        }
    }

}




@media screen and (max-width: 900px) {
    #navmenulabel {
        display: flex;
        z-index: 4;
    }

    #navul {
        display: grid;
        grid-auto-flow: row;
        grid-gap: 10px;
        position: fixed;
        top: 0px;
        left: 0px;
        max-width: min(400px,80vw);
        height: 100%;
        width: 75%;
        background-color: hsla(219, 72%, 15%, .99);
        // transform: translateX(0%);
        transform: translateX(0);
        box-shadow: 2px 2px 2px hsla(0, 0%, 50%, 0.8);


        

        li {

            //
            a {
                display: inline-grid;
                place-content: center;
                width: 100%;
                height: 100%;
                text-transform: uppercase;
                border-radius: 5px;
                padding:20px;

                &:hover {
                    background-color: hsla(240, 72%, 10%, .5);
                }
            }
        }
    }




    #navmenu:checked~#navul {
        transform: translateX(-100%);
        transition: all 1s ease-in-out;
        box-shadow: none;
    }

}


@media screen and (min-width: 900px) {

    #navmenulabel {
        display: none;
    }

    #navul {
        grid-auto-flow: column;
    }
}
`
loadscss(headerStyle, "header")
// savehtml(header)