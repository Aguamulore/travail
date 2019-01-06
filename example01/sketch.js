function setup() {
  // put setup code here
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
  // put drawing code here
    background(0);
    ellipse( width*0.5, height*0.5 , 50, 50)
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}