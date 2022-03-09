window.addEventListener('resize', resizeCanvas)

function resizeCanvas() {
    var canvasOne = document.getElementById('bg');
    // log(canvasOne.parentElement.height)
    canvasOne.width = window.innerWidth;
    canvasOne.height = window.innerHeight;
    canvasOne.style.background = "rgba(0, 40, 60, .1)"
}


// var heroSection = document.getElementsByClassName('section')[0];

main.append(gen(canvas, 'bg'))
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
    'x': .4,
    'y': .5
}

class Particle {
    constructor() {
        this.x = Math.random();
        this.y = Math.random();
        this.size = Math.random() * .1
        this.maxSize = 20
        this.z = Math.random();

        this.speed = .0005;
        this.speedX = this.speed * 3;
        this.speedY = this.speed * 4;
        this.speedZ = this.speed * 10;
        this.color = 'hsla(180, 100%, 50%, 1)'
        // this.show()


    };
    reset() {
        this.x = Math.random()// (1 - 2 * Math.random())
        this.y = Math.random()//(1 - 2 * Math.random())
        this.z = Math.random() * this.size//(1 - 2 * Math.random())
    }

    update() {
        var speed_x = this.speedX;
        var speed_y = this.speedY;
        var x = this.x - center.x
        var y = this.y - center.y
        var theta = Math.atan(y, x)
        var movex = Math.cos(theta) * (speed_x * Math.abs(x)) * this.z
        var movey = Math.sin(theta) * (speed_y) * this.z
        // this.y += movey

        if (this.x >= center.x) this.x += movex
        if (this.x < center.x) this.x -= movex
        if (this.y > center.y) this.y += movey// log(theta)
        if (this.y <= center.y) this.y += movey// log(theta)

        this.z += this.speedZ * (this.x + this.y + this.z)

        if (this.x < 0 || this.x > 1) this.reset()
        if (this.y < 0 || this.y > 1) this.reset()
        if (this.z > this.maxSize) this.reset()

    }




    show() {
        this.update()
        draw.beginPath();
        draw.fillStyle = 'aqua'
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
    requestAnimationFrame(animate)
}

animate()
