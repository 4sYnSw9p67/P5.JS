let bubble;

function setup() {
	createCanvas(800, 600);
	bubble = new Bubble(500, 300);
	console.log(bubble.x, bubble.y);
}

function draw() {
	background(0);

	bubble.show();
	bubble.move();
	bubble.bounce();


}