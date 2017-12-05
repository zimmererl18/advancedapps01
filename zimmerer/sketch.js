
function setup() { 
  createCanvas(1000, 800);
//background
	background(0,20,10)
}
function draw() { 
//ellipse
	noStroke(50);
	fill(250,800,200,500)
	ellipse(mouseX,mouseY,30,30)
}
function mouseWheel(){
	background(17,232,230)
}


function mouseDragged(){
	noStroke();
	ellipse(mouseX,mouseY,20,20,100)
	fill(0)
}

function draw(){
	background(127)
	//circle
	strokeWeight(2);
	stroke(r, g, b);
	fill(r,0,0,145)
	ellipse(360,200,200,200);
}



//for,red,green, and blue color
	
	var r, g, b;
	
	function setup(){
		createCanvas(720,400);
		//pick colors randomly
		r = random(255);
		g = random(255);
		b = random (255);



	}
	function mousePressed(){
		// pick a random color value
		
		r = random(255);
		g = random(255);
		b = random(255);
		
	}
		

	
	
//when the user clicks the mouse

	
	








function setup() { 
  createCanvas(600, 400);
//background
	background(950,20,10)
}
function draw() { 
//ellipse
	noStroke(50);
	fill(250,80,200,50)
	ellipse(mouseX,mouseY,30,30)
}

function mousePressed(){
	background(950,20,10)
}
