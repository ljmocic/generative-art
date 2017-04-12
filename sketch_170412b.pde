City[] cities;
int count = 3000;
int currentCity = 0;

void setup() {
  size(1280, 720);
  noStroke();
  cities = new City[count];

  for (int i = 0; i < count; i++) {
    cities[i] = new City();
  }
}

int visitedCount = 0;

void draw() {
  background(0);
  frameRate(0.0001);
     
  int minI = 0;
  int minJ = 0;
  for (int i = 0; i < count; i++) {
    float minDist = 1000000000.0;
    for (int j = 0; j < count; j++) {
      if(i != j) {
        float distance = dist(cities[i].getX(), cities[i].getY(), cities[j].getX(), cities[j].getY());
        if(distance < minDist && cities[j].isVisited() == 0) {
          minI = i;
          minJ = j;
          minDist = distance;
        }
      }
    }
    drawCitiesPath(cities[minI].getX(), cities[minI].getY(), cities[minJ].getX(), cities[minJ].getY());
    cities[minI].setVisited(1);
  }
  
  
  for (int i = 0; i < count; i++) {
    
    cities[i].display();
  }
}

void drawCitiesPath(int x1, int y1, int x2, int y2) {
  stroke(random(255), random(255), random(255));
  line(x1, y1, x2, y2);
}

class City {
  int x;
  int y;
  int radius;
  int visited;
  int current;
  
  // Contructor
  City() {
    x = (int)random(width);
    y = (int)random(height);
    radius = 3;
    visited = 0;
  }
  
  int getX() {
    return x;
  }
  
  int getY() {
    return y;
  }
  
  int isVisited() {
    return visited;
  }
  
  void setVisited(int x) {
    visited = x;
  }
  
  int isCurrent() {
    return current;
  }
  
  void setCurrent(int x) {
    current = x;
  }

  void display() {
    //fill(255);
    stroke(255);
    ellipse(x, y, radius, radius);
  }
}