var circleX = 50;

function setup() {
    createCanvas(800, 800);
    background(120);

}

function draw() {

    stroke(255);
    strokeWeight(10);
    line(30, 20, 80, 75);

    fill(0, 150, 0);
    stroke(0, 0, 255);
    strokeWeight(5);
    rect(200, 150, 150, 200, 80);

    circleX += 1;

    fill(145, 0, 0, 75);
    noStroke();
    strokeWeight(5);
    ellipse(circleX, mouseY, 15, 20);

}
/*
function mousePressed () {

    fill(145, 0, 0, 75);
    noStroke();
    strokeWeight(5);
    ellipse(circleX, mouseY, 15, 20);

}
*/
