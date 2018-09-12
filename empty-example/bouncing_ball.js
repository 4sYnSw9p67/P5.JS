var x = 50;
var speed = 3;

function setup() {
	createCanvas(800, 700);
}

function draw() {
	background(0);

	noFill();
	stroke(255);
	strokeWeight(4);

	ellipse(x, 200, 100, 100);

	if (x > width-50) {
		speed = -3;
		console.log("Boink!!");
	} 

	if (x < 50) {
		speed = 3;
		console.log("Boinkkk!!");
	} 

	x += speed;



}