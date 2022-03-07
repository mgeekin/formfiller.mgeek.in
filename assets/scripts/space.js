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

class Particle {
    constructor() {
        this.x = Math.random();
        this.y = Math.random();
        this.size = .1
        this.maxSize = 5
        this.z = this.size;
        this.speedX = .0002;
        this.speedY = .0003;
        this.speedZ = .004;
        this.color = 'aqua'
        // this.show()


    };
    reset() {
        this.x = Math.random()// (1 - 2 * Math.random())
        this.y = Math.random()//(1 - 2 * Math.random())
        this.z = Math.random() * this.size//(1 - 2 * Math.random())
    }

    update() {
        // var speed_x = (Math.random()) * this.speedX;
        // var speed_y = (Math.random()) * this.speedY;
        var speed_x = this.speedX;
        var speed_y = this.speedY;
        // if (this.x < .8 && this.x > .2) {
        if (this.x >= 0.5) {
            this.x += speed_x * (1 + 2 * this.y)
            if (this.x > 1) this.reset()
        }
        if (this.x < 0.5) {
            this.x -= speed_x * (1 + 2 * this.y)
            if (this.x < 0) this.reset()
        }
        if (this.y > 0.5) {
            this.y += speed_y * (1 + 2 * this.x)
            if (this.y > 1) this.reset()
        }
        if (this.y <= 0.5) {
            this.y -= speed_y * (1 + 2 * this.x)
            if (this.y < 0) this.reset()
        }
        this.z += this.speedZ
        if (this.z > this.maxSize) {
            this.reset()
        }
    }




    show() {
        this.update()
        draw.beginPath();
        draw.fillStyle = 'aqua'
        draw.arc(this.x * canvasOne.width, this.y * canvasOne.height, this.z, 0, Math.PI * 2)
        draw.fill()
    }
}
var particleArray = []
for (i = 0; i < 500; i++) {
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
