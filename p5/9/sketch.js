function setup() {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    background(0);
    
    cubeWidth = random(100);
    cubeHeight = random(500);
}

var cubeWidth;
var cubeHeight;
var temp = 0.0; // :D


function draw() {
    background(255);
    temp += 0.005;

    if(Math.random(1) < 0.7) {
        cubeWidth += 0.05;
    }
    else {
        cubeWidth -= 0.05;
    }

    if(PI / sin(temp) > 1000 || PI / cos(temp) > 1000 || PI / temp > 1000) {
        cubeWidth = random(100);
        cubeHeight = random(500);
        //alert("called");
    }

    rotateX(PI / sin(temp));
    rotateY(PI / cos(temp));
    rotateZ(PI / temp);

    push();
    translate(150, 0, 150);
    box(cubeWidth, cubeHeight, cubeWidth);
    pop();

    push();
    translate(-150, 0, 150);
    box(cubeWidth, cubeHeight, cubeWidth);
    pop();

    push();
    translate(150, 0, -150);
    box(cubeWidth, cubeHeight, cubeWidth);
    pop();

    push();
    translate(-150, 0, -150);
    box(cubeWidth, cubeHeight, cubeWidth);
    pop();

    // bottom
    push();
    translate(-150, 150, 0);
    rotateX(PI / 2);
    box(cubeWidth, cubeHeight, cubeWidth);
    pop();

    push();
    translate(150, 150, 0);
    rotateX(PI / 2);
    box(cubeWidth, cubeHeight, cubeWidth);
    pop();
    
    push();
    translate(0, 150, 150);
    rotateX(PI / 2);
    rotateZ(PI / 2);
    box(cubeWidth, cubeHeight, cubeWidth);
    pop();

    push();
    translate(0, 150, -150);
    rotateX(PI / 2);
    rotateZ(PI / 2);
    box(cubeWidth, cubeHeight, cubeWidth);
    pop();

    // top
    push();
    translate(-150, -150, 0);
    rotateX(PI / 2);
    box(cubeWidth, cubeHeight, cubeWidth);
    pop();

    push();
    translate(150, -150, 0);
    rotateX(PI / 2);
    box(cubeWidth, cubeHeight, cubeWidth);
    pop();
    
    push();
    translate(0, -150, 150);
    rotateX(PI / 2);
    rotateZ(PI / 2);
    box(cubeWidth, cubeHeight, cubeWidth);
    pop();

    push();
    translate(0, -150, -150);
    rotateX(PI / 2);
    rotateZ(PI / 2);
    box(cubeWidth, cubeHeight, cubeWidth);
    pop();

    // innner lines
    push();
    translate(0, 0, 150);
    rotateZ(PI / 4);
    box(cubeWidth, sqrt(2 * cubeHeight * cubeHeight), cubeWidth);
    pop();

    push();
    translate(150, 0, 0);
    rotateX(- PI / 4);
    box(cubeWidth, sqrt(2 * cubeHeight * cubeHeight), cubeWidth);
    pop();

    push();
    translate(0, 0, 150);
    rotateZ(3 * PI / 4);
    box(cubeWidth, sqrt(2 * cubeHeight * cubeHeight), cubeWidth);
    pop();

    push();
    translate(150, 0, 0);
    rotateX(- 3 * PI / 4);
    box(cubeWidth, sqrt(2 * cubeHeight * cubeHeight), cubeWidth);
    pop();

    push();
    translate(0, 0, -150);
    rotateZ(3 * PI / 4);
    box(cubeWidth, sqrt(2 * cubeHeight * cubeHeight), cubeWidth);
    pop();

    push();
    translate(-150, 0, 0);
    rotateX(- 3 * PI / 4);
    box(cubeWidth, sqrt(2 * cubeHeight * cubeHeight), cubeWidth);
    pop();

    
}