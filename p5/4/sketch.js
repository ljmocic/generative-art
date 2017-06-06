var creatures;

function setup() {
    createCanvas(500, 500);
    frameRate(60);
    background(128);

    creatures = new Array();

    for(var i = 0; i < 100; i++) {
        creatures.push(new Creature());
    }
}

function draw() {

    for(var i = 0; i < creatures.length; i++) {
        creatures[i].move();
        creatures[i].mutateColor();
        creatures[i].render();
    }
}

function Creature() {
    this.x = random(height);
    this.y = random(width);
    this.colorR = random(255);
    this.colorG = random(255);
    this.colorB = random(255);

    this.render = function() {
        stroke(this.colorR, this.colorG, this.colorB);
        ellipse(this.x, this.y, 5, 5);
    };

    this.mutateColor = function() {
        this.colorR += 1;
        this.colorG += 1;
        this.colorB += 1;
    };

    this.move = function() {
        var temp = 3;

        var choice = floor(random(4));

        if(choice == 0) {
            this.x += temp;
        }
        else if(choice == 1) {
            this.y += temp;
        }
        if(choice == 2) {
            this.x -= temp;
        }
        else if(choice == 3) {
            this.y -= temp;
        }

        this.x = constrain(this.x, 0, width - 1);
        this.y = constrain(this.y, 0, height - 1);
    };
}