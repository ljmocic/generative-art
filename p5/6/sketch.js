function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(0);
    frameRate(30);
}

var offset = 20, columnSpace = 90;

var x = offset, y = 0;

var centerText = "Math.random()";
var centerTextSize = 15;
var centerTextX = window.innerWidth / 2 - centerText.length * centerTextSize;
var centerTextY = window.innerHeight / 2 - 15;

function draw() {

    clear();
    background(0);
    
    while (y < window.innerHeight) {
        textSize(15);
        fill(254, 67, 101);
        text(random(10).toFixed(7), x, y);
        x += columnSpace;
        if (x > window.innerWidth) {
            x = offset;
            y += 25;
        }
    }
    y = 0;

    textSize(55);
    fill(255, 255, 255);
    text(centerText, centerTextX, centerTextY);
}