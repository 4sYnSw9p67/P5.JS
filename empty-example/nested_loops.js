
function setup () {
	createCanvas(800, 800);
}

function draw() {
	background(0);

	strokeWeight(2);
	stroke(255);

	var x = 25;
	while (x <= width) {
		fill(120, 0, 0);
		ellipse(x, 100, 25, 25);
	x += 50;

	}

	for (var x = 25; x < width; x += 50) {
		fill(0, 120, 0);
		ellipse(x, 200, 25, 25);

	}

	for (var x = 25; x < width; x += 50) {
		for (var y = 25; y < height; y += 50) {

			fill(0, random(0, 255), random(0, 255), random(0, 255));
			ellipse(x, y, 25, 25);
		}
	}

}