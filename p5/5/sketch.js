function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(0)
    stroke(177);
    frameRate(30);
}

var textX = window.innerWidth / 2 - 30;
var textY = window.innerHeight / 2 - 30;

var fightClub = "You are not your job, you're not how much money you have in the bank. You are not the car you drive. You're not the contents of your wallet. You are not your fucking khakis. You are all singing, all dancing crap of the world.";
var res = fightClub.split(" ");
var counter = 0;

function draw() {
    clear();
    if(frameCount % 20 == 0 && counter + 1 < res.length) {
        counter++;
    }
    for(var i = 50; i >= 0; i--) {
        fill(random(0, 255), random(0, 255), random(0, 255));
        textSize(50);
        text(res[counter], textX - i * 5, textY + i * 5);
    }
}