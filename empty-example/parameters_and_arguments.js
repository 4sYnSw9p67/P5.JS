function setup(){
	createCanvas(800, 700);
}

function draw(){
	background(0);
	flower(200, 200, 150, 20, 5);
}

function flower(x, y,fdiam, pdiam, petals){
	stroke(0, 255, 0);
	strokeWeight(4);
	line(x, y, x-45, y+200);

	strokeWeight(1);
	for(var i = 0;i <= petals; i++){
		t = 3.14*2;
		t = t/petals;
		var a = x + (fdiam/2)*cos(t*i);
		var b = y + (fdiam/2)*sin(t*i);

		stroke(255);
		fill(255, 255, 0);
		ellipse(a, b, pdiam, pdiam*2);
	}

	fill(120, 0, 0);
	ellipse(x, y, fdiam, fdiam);
}

