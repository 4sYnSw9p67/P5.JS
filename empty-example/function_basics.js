var ball = {
	x: 300,
	y: 200,
	xspeed: 4,
	yspeed: -3
}

function setup() {
	createCanvas(800, 700);

}

function draw() {
	background(0);
	display();
	bounce();
	move();

}

function move() {
	ball.x += ball.xspeed;
	ball.y += ball.yspeed;
}

function bounce() {
	if (ball.x > width-12 || ball.x < 12) {
		ball.xspeed *= -1;
	}

	if (ball.y > height-12 || ball.y < 12) {
		ball.yspeed *= -1;
	}

}

function display() {
	stroke(255);
	strokeWeight(4);
	noFill();
	ellipse(ball.x, ball.y, 24, 24);
}
