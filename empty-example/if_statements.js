function setup() {
	createCanvas(800, 700);
}

function draw() {
	background(0);

	noFill();
	stroke(255);
	strokeWeight(4);

	if (mouseX > 300) {
		fill(255, 0, 200);
	}

	ellipse(300, 200, 100, 100);

}