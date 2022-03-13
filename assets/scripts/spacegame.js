console.log('spaceGame loaded')
window.addEventListener('resize', resizeCanvas)

function resizeCanvas() {
    var canvasOne = document.getElementById('bg');
    // log(canvasOne.parentElement.height)
    canvasOne.width = window.innerWidth;
    canvasOne.height = window.innerHeight;
    canvasOne.style.background = "rgba(0, 40, 60, .1)"
}
// main.append(gen(div, '', '', 'section'))

// var heroSection = document.getElementsByClassName('section')[0];

main.append(gen(canvas, 'bg'))
bg.parentNode.append(gen(div, 'gameInst', ''))
gameInst.append(gen(h3, '', 'And while you are here roam around by pressing'), gen(div, 'keylist'))
keylist.append(gen(span, '', 'w', 'gamekey'), gen(span, '', 's', 'gamekey'), gen(span, '', 'a', 'gamekey'), gen(span, '', 'd', 'gamekey'))
gameInst.style.position = 'absolute'
gameInst.style.top = '80vh'
gameInst.style.right = 0
gameInst.style.zIndex = 1;
// gameInst.style.opacity = .1


bg.style.position = 'absolute'
bg.style.top = 0
bg.style.left = 0
bg.style.zIndex = 0;
hero.style.zIndex = 2;
var canvasOne = document.getElementById('bg');
resizeCanvas()
var draw = canvasOne.getContext('2d')
draw.font = "30px Verdana";
draw.fillText("mGeek.in", 40, 100);




// log(draw)
draw.strokeStyle = "pink";
draw.beginPath();
draw.fillStyle = 'aqua'
draw.rect(100, 100, 50, 50);
draw.fill();
draw.stroke();

draw.beginPath();
draw.lineWidth = 10;
draw.arc(100, 100, 50, 0, Math.PI * 2)
draw.stroke();


// draw.line
// draw.showfill()
var center = {
    'x': .6,
    'y': .5
}


var pressedKeys = new Set()

class Particle {
    constructor() {
        this.x = Math.random();
        this.y = Math.random();
        this.size = Math.random() * .1
        this.maxSize = 4
        this.z = Math.random();

        this.speed = .0005;
        this.speedX = this.speed * 4;
        this.speedY = this.speed * 4;
        this.speedZ = this.speed * 10;
        this.hue = 180 * Math.random();
        // this.color = `hsla(${this.hue}, 100%, 50%, 1)`
        this.color = `aqua`
        this.movex = 0
        this.movey = 0
        // this.show()


    };
    reset(dir = 1) {
        this.x = Math.random()// (1 - 2 * Math.random())
        this.y = Math.random()//(1 - 2 * Math.random())
        this.z = Math.random() * this.size//(1 - 2 * Math.random())
        if (dir == -1) {
            this.z = Math.random() * this.maxSize
            this.x = Math.random() * 2
            this.y = Math.random() * 2
        }
    }

    update() {
        var speed_x = this.speedX;
        var speed_y = this.speedY;
        var speed_z = this.speedZ
        // this.hue += Math.random() * 5wwww
        if (this.hue >= 360) this.hue = Math.random();

        if (pressedKeys.has("w") || pressedKeys.has("W")) {
            speed_x = speed_x * 4
            speed_y = speed_y * 4
            speed_z = speed_z * 2
            if (pressedKeys.has("d") || pressedKeys.has("D")) {
                this.x -= speed_z / this.z
                this.checkReset()
            }
            if (pressedKeys.has("a") || pressedKeys.has("A")) {
                this.x += speed_z / this.z
                this.checkReset()
            }

        }
        if (pressedKeys.has("s") || pressedKeys.has("S")) {
            speed_x = speed_x * -4
            speed_y = speed_y * -4
            speed_z = speed_z * -2
            if (this.z <= .1) {
                this.reset(-1)
            }
            if (pressedKeys.has("d") || pressedKeys.has("D")) {
                this.x -= speed_z / this.z
                this.checkReset()
            }
            if (pressedKeys.has("a") || pressedKeys.has("A")) {
                this.x += speed_z / this.z
                this.checkReset()
            }
        }

        if (!(pressedKeys.has("s") || pressedKeys.has("S") || pressedKeys.has("w") || pressedKeys.has("W"))) {
            if (pressedKeys.has("d") || pressedKeys.has("D")) {
                this.x -= speed_z / this.z
                this.checkReset()
            }
            if (pressedKeys.has("a") || pressedKeys.has("A")) {
                this.x += speed_z / this.z
                this.checkReset()
            }
        }


        var x = this.x - center.x
        var y = this.y - center.y
        var theta = Math.atan(y, x)
        this.movex = Math.cos(theta) * (speed_x * Math.abs(x)) * this.z
        this.movey = Math.sin(theta) * (speed_y) * this.z
        // this.y += movey
        this.z += speed_z * (this.x + this.y + this.z)

        if (this.x >= center.x) this.x += this.movex
        if (this.x < center.x) this.x -= this.movex
        if (this.y > center.y) this.y += this.movey// log(theta)
        if (this.y <= center.y) this.y += this.movey// log(theta)
        this.checkReset()



    }

    checkReset() {
        // if (this.z > this.maxSize) {
        //     this.x += this.movex * .1
        //     this.y += this.movey * .1
        // }
        if (this.x < 0 || this.x > 1) this.reset()
        if (this.y < 0 || this.y > 1) this.reset()

        if (this.z < .04) this.reset(-1)
    }



    show() {
        this.update()
        draw.beginPath();
        // draw.fillStyle = 'aqua'
        draw.fillStyle = this.color
        if (this.z <= 0) this.reset()
        draw.arc((this.x) * canvasOne.width, (this.y) * canvasOne.height, this.z, 0, Math.PI * 2)
        draw.fill()
    }
}
var particleArray = []
for (i = 0; i < 150; i++) {
    var cc = new Particle();
    // log(cc)
    particleArray[i] = cc
}


function animate() {
    draw.clearRect(0, 0, canvasOne.width, canvasOne.height)
    for (i = 0; i < particleArray.length; i++) {
        particleArray[i].show()
    }
    // var pressedKeys = new Set()

    requestAnimationFrame(animate)
}

animate()


// bg.addEventListener('keypess', (e) => { console.log(e.key) })



document.addEventListener('keypress', (event) => {
    // pressedKeys = {}


})

document.addEventListener('keydown', (event) => {
    pressedKeys.add(event.key)
})

document.addEventListener('keyup', (event) => {
    pressedKeys.delete(event.key)

})