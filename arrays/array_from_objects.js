let bubbles = [];

function setup () {

	createCanvas(800, 600);

	for(var i = 0; i < 7; i++){
		bubbles[i] = new Bubble(random(100, 700), random(100, 500));
	}

}

function draw(){
	background(0);
	bubbles.forEach(function(bubble) {bubble.show()});
}