var myCanvas;
var vol;

var dots = [];
var numDots = 300;

var t = 0;
var time = 0;
var getT = [];
var getTime = [];

var randNums = [];


function preload() {
	music = loadSound('../music/NoFearRecordsDemo.mp3'); 
}

function setup() {

	myCanvas = createCanvas(windowWidth, windowHeight, 'p2d');
	background(255);
	frameRate(30);
	smooth();

	analyzer = new p5.Amplitude();
	analyzer.setInput(music);
	fft = new p5.FFT();
	fft.setInput(music);

	music.loop();

	// add an object inside array	
	for (var i = 0; i < numDots; i++) {
		//dots[i] = new Dot(180, 0, 0.5+random(0.95,1), 0.5);
		dots[i] = new Dot(random(0, 220), random(0, 90), random(0.5, 2), random(0.5, 2));
		t += 0.01;
		time += 0.001;
		getT[i] = t;
		getTime[i] = time;


		// if (random(1) > 0.5) {
		// 	randNums[i] = random(1,2);
		// } else {
		// 	randNums[i] = random(-2,-1);
		// }
	}


}

var varRot = 0;

function draw() {

	vol = analyzer.getLevel() * 25;

	// var numBands = numDots; //32768/2;
	// var spectrum = fft.analyze(256);

	push();
		translate(0, 0);
		noStroke();
		fill(0);
		rect(0, 0, width, height);
	pop();

	push();
		translate(width/2, height/2);
		rotate(varRot);
		
		for (var i = 0; i < dots.length; ++i) {
			rotate(radians(360/numDots));
			dots[i].display(); 	
			dots[i].move(vol); //*randNums[i]
		}
		varRot = varRot + vol/200;
		time = time + 0.0001;
		//noLoop();
	pop();

	// console.log(varRot);
  
}



function Dot(tempX, tempY, tempSpeed, tempSpeedY) {
	this.x = tempX;
	this.y = tempY;
	this.speed = tempSpeed;
	this.speedY = tempSpeedY;

	this.alph = random(200, 255);
	this.c = color(255, 255, 255, this.alph);
	//this.c = color(random(1,255),random(1,255),random(1,255), this.alph);
	/*
	var clist = ['g0', 'g1', 'g2', 'g3', 'g4'];
	var mc = random(clist)
	if (mc == 'g0') {
	    this.c = color(166, 124, 0, this.alph);
	}

	if (mc == 'g1') {
	    this.c = color(191, 155, 48, this.alph);
	}

	if (mc == 'g2') {
	    this.c = color(255, 191, 0, this.alph);
	}

	if (mc == 'g3') {
	    this.c = color(255, 207, 64, this.alph);
	}

	if (mc == 'g4') {
	    this.c = color(255, 220, 115, this.alph);
	}
	*/

	this.eleSize = random(1, 7);
}

Dot.prototype.display = function() {
	noStroke(); fill( this.c );//random(60,255)

	if (random(1) > 0.995) {
		this.vol2 = vol * 3;


		if (analyzer.getLevel() > 0.3) {
			ellipse(this.x,this.y,this.vol2*2, this.vol2*2);
		} else {
			
			ellipse(this.x,this.y,this.vol2, this.vol2);
		}

	} else {
		ellipse(this.x,this.y,this.eleSize-3,this.eleSize-3);
	}
}


Dot.prototype.move = function(tempA) {
	this.ranSize = tempA * 10;
	constrain(this.ranSize, 0, 3);

	this.x = this.x + this.speed * (tempA/1);


	if ( this.y > 100 ) {
		this.speedY = -this.speedY ;
	} else if ( this.y < -100) {
		this.speedY = -this.speedY;
	}


	if ( this.x > 180 ) {
		this.speed = -this.speed ;
	} else if ( this.x < 110 ) { //* tempA
		this.speed = -this.speed;
	}
}

Dot.prototype.intersect = function(other) {
	var d  = dist(this.x, this.y, other.x, other.y);

	if ( d < 8 ) {
		stroke(this.c); noFill(); strokeWeight(.5);
		line(other.x, other.x, this.x, this.x);
	}

}



function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
