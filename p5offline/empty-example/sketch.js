function setup() {
    createCanvas(450, 450);
    background(0)
    stroke(177);
    frameRate(30);
}

var textX = 125;
var textY = 225;

var mosDef = "Booka Ha hah You know the deal It's just me yo Beats by Su-Primo for all of my peoples, negroes and latinos and even the gringos";
var res = mosDef.split(" ");
var counter = 0;

function draw() {
    clear();
    if(frameCount % 10 == 0 && counter + 1 < res.length) {
        counter++;
    }
    for(var i = 50; i >= 0; i--) {
        fill(random(0, 255), random(0, 255), random(0, 255));
        textSize(50);
        text(res[counter], textX - i * 5, textY + i * 5);
    }
}