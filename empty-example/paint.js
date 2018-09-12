function setup() {
    createCanvas(800, 800);
    background(120);

}

function draw() {

    if (mouseIsPressed) {

        fill(145, 0, 0, 75);
        noStroke();
        strokeWeight(5);
        ellipse(mouseX, mouseY, 15, 20);

    }

}