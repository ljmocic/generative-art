function setup() {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    background(255);
    generateObjects()
}

var x = 400;
var y = 400;
var z = 400;

var objects = new Array();
var numberOfObjects = 25;

function draw() {
    background(255);
    translate(-x / 2, -y / 2, -z / 2)
    for (var i = 0; i < numberOfObjects; i++) {
        objects[i].render();
    }

    if (frameCount % 5 == 0) {
        generateObjects();
    }
}

function Line() {
    this.x1 = random(x);
    this.y1 = random(y);
    this.z1 = random(z);

    this.x2 = random(x);
    this.y2 = random(y);
    this.z2 = random(z);

    this.render = function () {
        beginShape();
        vertex(this.x1, this.y1, this.z1);
        vertex(this.x2, this.y2, this.z2);
        endShape();
    }
}

function Triangle() {
    this.x1 = random(x);
    this.y1 = random(y);
    this.z1 = random(z);

    this.x2 = random(x);
    this.y2 = random(y);
    this.z2 = random(z);

    this.x3 = random(x);
    this.y3 = random(y);
    this.z3 = random(z);

    this.render = function () {
        beginShape();
        vertex(this.x1, this.y1, this.z1);
        vertex(this.x2, this.y2, this.z2);
        vertex(this.x3, this.y3, this.z3);
        endShape();
    }
}

function Rectangle() {
    this.x1 = random(x);
    this.y1 = random(y);
    this.z1 = random(z);

    this.x2 = random(x);
    this.y2 = random(y);
    this.z2 = random(z);

    this.x3 = random(x);
    this.y3 = random(y);
    this.z3 = random(z);

    this.x4 = random(x);
    this.y4 = random(y);
    this.z4 = random(z);

    this.render = function () {
        beginShape();
        vertex(this.x1, this.y1, this.z1);
        vertex(this.x2, this.y2, this.z2);
        vertex(this.x3, this.y3, this.z3);
        vertex(this.x4, this.y4, this.z4);
        endShape();
    }
}

function generateObjects() {
    objects = new Array();
    for (var i = 0; i < numberOfObjects; i++) {
        var randomized = random(1);
        if (randomized < 0.33) {
            objects.push(new Line());
        } else if (randomized < 0.66) {
            objects.push(new Triangle());
        } else {
            objects.push(new Rectangle());
        }
    }
}