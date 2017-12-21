var angle = 0.0;
var vectors = new Array();
var u = 0.0;

function setup() {
    createCanvas(700, 700, WEBGL);
    background(0);
}

var arr = [11, 23, 4, 10, 7, 27, 14, 5, 22, 0, 0, 23, 13, 0, 24, 7, 12, 9, 7, 10, 0, 28, 27, 16, 10, 2, 13, 20, 1, 13, 6, 3, 22, 9, 20, 0, 2, 28, 12, 2];

function draw() {
    translate(0, 100)
    background(0);

    clear();
    rotateY(angle);
    angle += 0.005;

    var x = -arr[0] * cos(u) - arr[1] * sin(u) - arr[2] * cos(arr[3] * u) - arr[4] * sin(arr[5] * u);
    var y = -arr[8] * cos(arr[9] * u)  + arr[14] * sin(arr[15] * u) - arr[16] * sin(arr[17] * u);
    var z = arr[18] * cos(arr[19] * u) - arr[20] * sin(arr[21] * u);
    vectors.push(createVector(6 * x, 6 * y, 6 * z));
    u += 0.01;
    if (u > 2 * PI) {
        u = 0;
    }


    ambientLight(100, 80, 80);
    pointLight(200, 200, 200, 0, 0, 0);
    noFill();
    stroke(255);
    strokeWeight(6);
    beginShape();
    for (var i = 0; i < vectors.length; i++) {
        vertex(vectors[i].x, vectors[i].y, vectors[i].z);
    }
    endShape();
}