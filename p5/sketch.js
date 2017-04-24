var walker;

function setup() {
  createCanvas(1280, 720);
  frameRate(300);
  walker = new Walker();
  background(127);
}

function draw() {
  walker.step();
  walker.render();
}

function Walker() {
  this.x = width / 2;
  this.y = height / 2;

  this.render = function() {
    stroke(0);
    // point(this.x,this.y);
    ellipse(this.x, this.y, 80, 80);
  };

  this.step = function() {
    var temp = 5;
    var choice = floor(random(4));
    if (choice === 0) {
      this.x = this.x + temp;
    }
    else if (choice == 1) {
      this.x = this.x - temp;
    }
    else if (choice == 2) {
      this.y = this.y + temp;
    }
    else {
      this.y = this.y - temp;
    }
    this.x = constrain(this.x, 0, width - 1);
    this.y = constrain(this.y, 0, height - 1);
  };
}
