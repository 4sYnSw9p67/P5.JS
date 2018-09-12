class Bubble {

	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.xspeed = 4;
		this.yspeed = -3;
	}

	move(){
		this.x += this.xspeed;
		this.y += this.yspeed;

	}

	show(){
		stroke(255);
		strokeWeight(4);
		noFill();
		ellipse(this.x, this.y, 24, 24);
	}

	bounce() {
		if (this.x > width-12 || this.x < 12) {
			this.xspeed *= -1;
		}

		if (this.y > height-12 || this.y < 12) {
			this.yspeed *= -1;
		}
	}
}