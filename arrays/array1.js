var nums = [100, 25, 12, 72];
var words = ["rainbow", "heart", "purple", "friendship"]
var i = 0;

function setup () {
	createCanvas(800, 600);

}

function draw() {
	background(0);

	ellipse(300, 200, nums[2], nums[2]);

	fill(255);
	textSize(32);
	text(words[i], 12, 200);

}

function mousePressed(){
	if (i < words.length-1) {
		i += 1;
	} else {i = 0}
}