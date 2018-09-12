var on = false;

function setup() {
	createCanvas(800, 700);
}

function draw() {
	background(0);

	stroke(255);
	strokeWeight(4);
	noFill();

	if (on){background(120, 0, 0);}
	if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
		fill(255);		
	}

	rectMode(CENTER);
	rect(300, 200, 100, 100);

}

function mousePressed() {

	if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
		on = !on;
	}
}