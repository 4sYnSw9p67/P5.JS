let bubble;

function setup() {
	createCanvas(800, 600);
	bubble1 = new Bubble(500, 300);
	bubble2 = new Bubble(200, 150);

	console.log(bubble1.x, bubble1.y);
	console.log(bubble2.x, bubble2.y);
}

function draw() {
	background(0);

	bubble1.show();
	bubble1.move();
	bubble1.bounce();

	bubble2.show();
	bubble2.move();
	bubble2.bounce();



}