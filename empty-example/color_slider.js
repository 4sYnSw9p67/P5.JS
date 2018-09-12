var r = 0;
var g = 0;
var b = 255;

//var col = 0;

function setup(){
	createCanvas(800, 800);

}

function draw (){

	r = map(mouseX, 0, 800, 0, 255);
	b = map(mouseX, 0, 800, 255, 0);

	background(r, g, b);


	fill(250, 118, 222);
	ellipse(mouseX, 200, 64, 64);
}