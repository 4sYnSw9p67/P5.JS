var circle1 = {
	x: 0,
	y: 200,
	diameter: 50
};

var circle2 = {
	x: 0,
	y: 200,
	diameter: 50
};

var r = 218;
var g = 160;
var b = 221;

function setup() {

	createCanvas(800, 800);
}

function draw () {

	background (r, g, b);

	fill(250, 200, 200);
	ellipse(circle1.x, circle1.y, circle1.diameter, circle1.diameter);

	circle1.x += 1;
}