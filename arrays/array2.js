var nums = [100, 25, 12, 72];
var i = 0;

function setup () {
	createCanvas(800, 600);

}

function draw() {
	background(0);

	for(i = 0; i < nums.length; i++) {

		ellipse((i+1)*100, 200, nums[i], nums[i]);

	}

}