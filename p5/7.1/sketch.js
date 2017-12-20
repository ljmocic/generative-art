function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(0);
    frameRate(120);
}

var drawingActive = true;

var x = 0, y = 0;
var rectSize = 20;

var colorPalettes = [['#FCF262', '#D45321', '#CBD459', '#A4CD7B', '#D49721'],
                     ['#4885ED', '#48EDD2', '#D45321'],
                     ['#00FFFF', '#FF00FF', '#FFFF00'],
                     ['#B695B8', '#ECA2C8', '#A2D9EC', '#A2ECD4', '#E7ED9E']];

function draw() {

    if(drawingActive) {
        
        if(random(1) < 0.5) {
            fillRandomFromPalette();
            triangle(x, y, x, y + rectSize, x + rectSize, y);
            fillRandomFromPalette();
            triangle(x + rectSize, y + rectSize, x, y + rectSize, x + rectSize, y);
        }
        else {
            fillRandomFromPalette();
            triangle(x, y, x, y + rectSize, x + rectSize, y + rectSize);
            fillRandomFromPalette();
            triangle(x + rectSize, y, x, y, x + rectSize, y + rectSize);
        }
        
        x += rectSize;
        if(x > window.innerWidth) {
            x = 0;
            y +=  rectSize;

            if(y > window.innerHeight) {
                drawingActive = false;
            }
        }

    }
}

function fillRandomFromPalette() {
    var chosenPalette = 3;
    var randomValue = random(colorPalettes[chosenPalette].length);
    var colorIndex = Math.floor(randomValue);
    fill(colorPalettes[chosenPalette][colorIndex]);
}
