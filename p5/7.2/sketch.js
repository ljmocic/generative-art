var waitingForPallete = false;
var drawingActive = false;
var x = 0, y = 0;
var rectSize = 20;
var palette;

function preload() {
    getPalleteFromAPI();
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(255);
    frameRate(120);
}

function draw() {

    if (drawingActive) {

        while (y < window.innerHeight) {
            if (random(1) < 0.5) {
                fillRandomFromPallete();
                triangle(x, y, x, y + rectSize, x + rectSize, y);
                fillRandomFromPallete();
                triangle(x + rectSize, y + rectSize, x, y + rectSize, x + rectSize, y);
            } else {
                fillRandomFromPallete();
                triangle(x, y, x, y + rectSize, x + rectSize, y + rectSize);
                fillRandomFromPallete();
                triangle(x + rectSize, y, x, y, x + rectSize, y + rectSize);
            }

            x += rectSize;
            if (x > window.innerWidth) {
                x = 0;
                y += rectSize;

                if (y > window.innerHeight) {
                    drawingActive = false;
                }
            }
        }

    }
}

function showLoading() {
    var centerTextSize = 20;
    var centerText = "Loading random palette from colormind API...";
    var centerTextX = window.innerWidth / 2 - centerText.length * centerTextSize / 3;
    var centerTextY = window.innerHeight / 2;
    textSize(centerTextSize);
    fill(255, 255, 255);
    text(centerText, centerTextX, centerTextY);
}

function fillRandomFromPallete() {
    var randomValue = random(palette.length);
    var colorIndex = Math.floor(randomValue);
    fill(palette[colorIndex][0], palette[colorIndex][1], palette[colorIndex][2]);
}

function getPalleteFromAPI() {
    var http = new XMLHttpRequest();

    var url = "http://colormind.io/api/";
    var data = {
        model: "default",
        input: [
            [44, 43, 44],
            [90, 83, 82],
            [44, 43, 44],
            [90, 83, 82],
            [44, 43, 44]
        ]
    }

    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            palette = JSON.parse(http.responseText).result;
            drawingActive = true;
            removeLoadingMessage();
        }
    }

    http.open("POST", url, true);
    http.send(JSON.stringify(data));
}

function removeLoadingMessage() {
    var p = document.body.getElementsByTagName("p")[0];
    document.body.removeChild(p);
}