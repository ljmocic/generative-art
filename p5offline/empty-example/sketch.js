function setup() {
    createCanvas(650, 650);
    stroke(177);
    frameRate(30);
}

var y = 10;
var tempX = -10;

var x = 10;
var tempY = -10;

function draw() {
    background(0);
    y = y + tempY;
    x = x + tempX;

    if(x < 0 || x > width - 30) {
        tempX *= -1;
    }

    for(var i = 0; i < 5; i++) {
        stroke(random(0, 255), random(0, 255), random(0, 255));
        line(x + i, 0, x + i, height);
    }

    if(y < 0 || y > height - 30) {
        tempY *= -1;
    }
    for(var i = 0; i < 5; i++) {
        stroke(random(0, 255), random(0, 255), random(0, 255));
        line(0, y + i, width, y + i);
    }
    
}