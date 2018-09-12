var spot = {
	x: 0,
	y: 0
};

var col = {
	r: 0,
	g: 0,
	b: 0,
	a: 0
};

var size;

function setup () {
	createCanvas(800, 700);
	background(0);
}

function draw () {
	spot.x = random(0, 800);
	spot.y = random(0, 800);

	col.r = random(0, 255);
	//col.g = random(0, 255);
	col.b = random(0, 255);
	col.a = random(50, 200);	

	size = random(2, 32);

	fill(col.r, col.g, col.b, col.a);
	noStroke();
	ellipse(spot.x, spot.y, size, size);

}